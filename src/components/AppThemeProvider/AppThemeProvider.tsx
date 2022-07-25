import * as React from 'react';

import { Global, ThemeProvider } from '@emotion/react';

import { AppThemeControllerContext } from 'components/AppThemeProvider/AppThemeControllerContext';
import { getRebootCSS } from 'components/AppThemeProvider/reboot';
import { appTheme, ThemeVariant } from 'components/AppThemeProvider/theme';

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeVariant, setThemeVariant] = React.useState(ThemeVariant.Light);

  const contextValue = React.useMemo(
    () => ({
      setThemeVariant,
      themeVariant
    }),
    [themeVariant]
  );
  return (
    <ThemeProvider theme={appTheme[themeVariant]}>
      <Global styles={getRebootCSS(themeVariant)} />
      <AppThemeControllerContext.Provider value={contextValue}>
        {children}
      </AppThemeControllerContext.Provider>
    </ThemeProvider>
  );
}
