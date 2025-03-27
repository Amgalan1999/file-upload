import type { ThemeTypes } from '@/types/theme';

const LightTheme: ThemeTypes = {
  name: 'LightTheme',
  dark: false,
  variables: {
    'border-color': '#eeeeee',
    'carousel-control-size': 10
  },
  colors: {
    primary: '#1F1F1F',
    onPrimaryHigh: '#FFFFFF',
    onPrimaryMedium: '#FFFFFF', // 72%
    primarySoft: '#EDF0F2',
    onPrimarySoftHigh: '#1F1F1F',
    onPrimarySoftMedium: '#474D57', // 72%

    secondary: '#633AFF',
    onSecondaryHigh: '#FFFFFF',
    onSecondaryMedium: '#FFFFFF', // 72%
    secondarySoft: '#E2D9F3',
    onSecondarySoftHigh: '#1F1F1F',
    onSecondarySoftMedium: '#1F1F1F', // 80%

    surface1: '#FFFFFF',
    surface2: '#F8F9FA',
    surface3: '#F2F2F2',
    surface1Soft: '#F2F2F2',
    onSurfaceHigh: '#212529',
    onSurfaceMedium: '#636C73',
    onSurfaceDisabled: '#ADB5BD',

    background: '#FFFFFF',
    onBackground: '#000000',

    success: '#34C759',
    onSuccessHigh: '#FFFFFF',
    onSuccessMedium: '#FFFFFF', // 72%
    successSoft: '#EFFBF5',
    onSuccessSoftHigh: '#12874C',
    onSuccessSoftMedium: '#052E19', // 72%

    error: '#CC3435',
    onErrorHigh: '#FFFFFF',
    onErrorMedium: '#FFFFFF', // 72%
    errorSoft: '#FEECEC',
    onErrorSoftHigh: '#691111',
    onErrorSoftMedium: '#691111', // 72%

    warning: '#E6C20F',
    onWarningHigh: '#FFFFFF',
    onWarningMedium: '#FFFFFF', // 72%
    warningSoft: '#F9EEC8',
    onWarningSoftHigh: '#804F00',
    onWarningSoftMedium: '#804F00', // 72%

    info: '#01BAEF',
    onInfoHigh: '#FFFFFF',
    onInfoMedium: '#FFFFFF', // 72%
    infoSoft: '#EDF3FD',
    onInfoSoftHigh: '#041125',
    onInfoSoftMedium: '#041125', // 72%

    strokePrimary: '#1F1F1F',
    strokeSecondary: '6F42C1',
    strokeDark: '#E8EBED',
    strokeLight: '#FFFFFF', // 24%

    neutral: '#FD71AF'
  }
};

export { LightTheme };
