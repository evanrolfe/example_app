require 'jwt'
require 'ostruct'

class ApplicationController < ActionController::Base
  include Pundit

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :verify_jwt_token

  rescue_from Pundit::NotAuthorizedError do |exception|
    render json: { error: exception.message}, status: 401
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  def verify_jwt_token
    access_token = request.headers['Authorization']
    return unless access_token.present?

    client_secret = 'btlFIn_lttkwr_6eT--0HXNB8StMDjnIMZVysAmS770bSEO5mO__l7OsZuHCjxgh'
    decoded = JWT.decode(access_token, jwk.to_key, true, { algorithm: 'RS256' })

    @current_user_id = decoded[0]['sub']
  end

  def current_user
    @current_user ||= OpenStruct.new(id: @current_user_id)
  end

  # https://onescan.eu.auth0.com/.well-known/jwks.json
  def jwk
    JSON::JWK.new(
      {
        "alg": "RS256",
        "kty": "RSA",
        "use": "sig",
        "x5c": [
        "MIIDAzCCAeugAwIBAgIJZm1OadUFxcjJMA0GCSqGSIb3DQEBCwUAMB8xHTAbBgNVBAMTFG9uZXNjYW4uZXUuYXV0aDAuY29tMB4XDTE5MDYyMDEyNDc0MFoXDTMzMDIyNjEyNDc0MFowHzEdMBsGA1UEAxMUb25lc2Nhbi5ldS5hdXRoMC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDgycGzSht3i6ebluPzWmht9ujJPRAQqCMS4jedXRq28YjgcO2/MMyMWscjbJISPNN/BhWAIdRpW3BRfG4+MvwpzTmoyFz3FP/GqxIlrQvD3gmFXcJGDalZJf6I4QIiztLrAFAycHOyZB0cUuYGF+eUOU0gLN8BnEW+QZWE0NiEXufBOI5sdczn7SIJaUa7c07v0WGjpp8KbL6D1ubfD/9SbmTWpOtGeIsQ2xdmrVOu/kdohdxN5yftWWZRSDss6ojlS4DURX0C5gRB+WUSPhf7jkHhnXjxj8pCdooCQosdxT73FTLuX8b19264bhSH9JQQ8FQnjugXCKp6S83ZloXlAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFO2LQR92ar/J9KPNDCdCF5EdAUezMA4GA1UdDwEB/wQEAwIChDANBgkqhkiG9w0BAQsFAAOCAQEAYXBXFDD+ys+qsfl42Iv5cEcXtZIq23qlrhBz5Ltc17lpLrXnRQRyIJVstnF0mMN8yq/GeS7tgVr/QTRi0UtdKU2zRthQJIa2Fox+BWxLEoZGABxeeFmgyTRTMyc6Wu0IjieWOhKY6ioyelgNblnZAFQzCSiCFLZmHrAIbO9yUfFFXfO3+SA5RcczK0HmheCe4ioVoEj1yFyYTu/c7qeUV5g+C8KOq/VtHoK0/tH7MHOxsMmoONO4biSYLGgPc8vhZGhAt/UAwwv+3xRpBaO4xHwkz4s1kHkC4WjrOqYtK/O8Yp+pFLI9Vldb1YVqJ2iwxqXplL1+AbKh8PtgyE5DoQ=="
        ],
        "n": "4MnBs0obd4unm5bj81pobfboyT0QEKgjEuI3nV0atvGI4HDtvzDMjFrHI2ySEjzTfwYVgCHUaVtwUXxuPjL8Kc05qMhc9xT_xqsSJa0Lw94JhV3CRg2pWSX-iOECIs7S6wBQMnBzsmQdHFLmBhfnlDlNICzfAZxFvkGVhNDYhF7nwTiObHXM5-0iCWlGu3NO79Fho6afCmy-g9bm3w__Um5k1qTrRniLENsXZq1Trv5HaIXcTecn7VlmUUg7LOqI5UuA1EV9AuYEQfllEj4X-45B4Z148Y_KQnaKAkKLHcU-9xUy7l_G9fduuG4Uh_SUEPBUJ47oFwiqekvN2ZaF5Q",
        "e": "AQAB",
        "kid": "MUE3N0Y0NjA4MDdFQTAyNDAxQjVCMjUwQzA2MDAwQ0I2MkUzMTAwQQ",
        "x5t": "MUE3N0Y0NjA4MDdFQTAyNDAxQjVCMjUwQzA2MDAwQ0I2MkUzMTAwQQ"
      }
    )
  end
end
