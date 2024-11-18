import { useAuthenticationStore } from "../../iam/services/authentication.store.js";

/**
 * Guard to check if the user is authenticated before accessing rental routes
 *
 * @summary
 * This guard checks if the user is authenticated and if the route requires authentication.
 * If the user is not authenticated and the route requires authentication, the user is redirected to the sign-in page.
 * @param to - The route the user is navigating to
 * @param from - The route the user is navigating from
 * @param next - The function to navigate to the next route
 * @returns {*}
 */
export const rentGuard = (to, from, next) => {
    const authenticationStore = useAuthenticationStore();
    const isAnonymous = !authenticationStore.isSignedIn;
    const rentalRoutes = ['/rent', '/rentals', '/rental-details'];
    const routeRequiresToBeAuthenticated = rentalRoutes.includes(to.path);

    if (isAnonymous && routeRequiresToBeAuthenticated) return next('/login');
    else next();
};