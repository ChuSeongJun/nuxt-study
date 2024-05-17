import type { UserWithoutPassword } from '~/types/user';
import { getUser } from '@/composables/auth/userData';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref<Maybe<UserWithoutPassword>>();

    const signIn = async (email: string, password: string) => {
      await $fetch<{ user: UserWithoutPassword }>('/auth/login', {
        method: 'POST',
        body: {
          email,
          password
        }
      });
      const foundUser = getUser(email, password);

      if (!foundUser) {
        throw createError({
          statusCode: 401,
          statusMessage: 'Invalid email or password'
        });
      }
      setUser(foundUser);
    };

    const signOut = () => {
      setUser(null);
    };

    const setUser = (user: Maybe<UserWithoutPassword>) => {
      authUser.value = user;
    };

    return {
      user: authUser,
      isAuthenticated: computed(() => !!authUser.value),
      isAdmin: computed(() => (!authUser.value ? false : authUser.value.roles.includes('ADMIN'))),
      signIn,
      signOut
    };
  },
  {
    persist: {
      storage: persistedState.localStorage
    }
  }
);
