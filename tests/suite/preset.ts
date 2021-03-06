import { Authenticator, TOTP, HOTP } from '@otplib/core';
import { HOTPAsync, TOTPAsync, AuthenticatorAsync } from '@otplib/core-async';
import {
  rfcTestSuiteHOTP,
  rfcTestSuiteTOTP,
  dataTestSuiteAuthenticator
} from '@tests/suite/rfcs';

interface Presets {
  hotp: HOTP | HOTPAsync;
  totp: TOTP | TOTPAsync;
  authenticator: Authenticator | AuthenticatorAsync;
}

export function testSuitePreset(name: string, pkg: Presets): void {
  rfcTestSuiteHOTP(name, pkg.hotp);
  rfcTestSuiteTOTP(name, pkg.totp);
  dataTestSuiteAuthenticator(name, pkg.authenticator);
}
