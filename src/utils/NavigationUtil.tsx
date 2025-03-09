import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export async function navigate(routeName: string, params?: object) {
  await navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}

export async function resetAndNavigate(routeName: string) {
  await navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      }),
    );
  }
}

export async function resetAndNavigateWithParams(
  routeName: string,
  params?: Record<string, any>,
) {
  await navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName, params}],
      }),
    );
  }
}

export async function goBack() {
  await navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

export async function prepareNavigation() {
  await navigationRef.isReady();
}

export async function resetAndNavigateSequence(
  intermediateRoute: string,
  finalRoute: string,
  params?: Record<string, any>,
) {
  await navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: intermediateRoute}, {name: finalRoute, params}],
      }),
    );
  }
}

export async function goBackScreen(fallbackRoute?: string) {
    await navigationRef.isReady();
    if (navigationRef.canGoBack()) {
      navigationRef.dispatch(CommonActions.goBack());
    } else if (fallbackRoute) {
      navigationRef.dispatch(CommonActions.navigate({name: fallbackRoute}));
    }
}

export async function navigateToTab(
  routeName: string,
  params?: Record<string, any>,
  tabName?: string,
) {
  await navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: routeName,
            params: {
              ...params,
              screen: tabName, // Target the specific tab
            },
          },
        ],
      }),
    );
  }
}
