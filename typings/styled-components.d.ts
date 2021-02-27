import { BaseThemeType } from "../src/ui/common/theme/baseTheme";

declare module "styled-components" {
    interface DefaultTheme extends BaseThemeType {}
}
