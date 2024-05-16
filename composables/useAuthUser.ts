import type { UserWithoutPassword } from '~/types/user';

export const useAuthUser = () => {
  const authUser = ref<Maybe<UserWithoutPassword>>(null);
  const isAuthenticated = computed(() => !!authUser.value);
  const isAdmin = computed(() => !!authUser.value?.roles.includes('ADMIN'));
  return { authUser, isAuthenticated, isAdmin };
};
