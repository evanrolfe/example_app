json.extract! secret, :id, :name, :value, :user_id, :created_at, :updated_at
json.url secret_url(secret, format: :json)
