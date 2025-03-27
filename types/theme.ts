export type ThemeTypes = {
  name: string;
  dark: boolean;
  variables?: object;
  colors: {
    primary?: string;
    onPrimaryHigh?: string;
    onPrimaryMedium?: string;
    primarySoft?: string;
    onPrimarySoftHigh?: string;
    onPrimarySoftMedium?: string;

    secondary?: string;
    onSecondaryHigh?: string;
    onSecondaryMedium?: string;
    secondarySoft?: string;
    onSecondarySoftHigh?: string;
    onSecondarySoftMedium?: string;

    surface1?: string;
    surface2?: string;
    surface3?: string;
    surface1Soft?: string;
    onSurfaceHigh?: string;
    onSurfaceMedium?: string;
    onSurfaceDisabled?: string;

    background?: string;
    onBackground?: string;

    success?: string;
    onSuccessHigh?: string;
    onSuccessMedium?: string;
    successSoft?: string;
    onSuccessSoftHigh?: string;
    onSuccessSoftMedium?: string;

    error?: string;
    onErrorHigh?: string;
    onErrorMedium?: string;
    errorSoft?: string;
    onErrorSoftHigh?: string;
    onErrorSoftMedium?: string;

    warning?: string;
    onWarningHigh?: string;
    onWarningMedium?: string;
    warningSoft?: string;
    onWarningSoftHigh?: string;
    onWarningSoftMedium?: string;

    info?: string;
    onInfoHigh?: string;
    onInfoMedium?: string;
    infoSoft?: string;
    onInfoSoftHigh?: string;
    onInfoSoftMedium?: string;

    strokePrimary?: string;
    strokeSecondary?: string;
    strokeDark?: string;
    strokeLight?: string;

    neutral?: string
  };
};
