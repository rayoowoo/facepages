class Message < ApplicationRecord
    belongs_to :user
    belongs_to :chat
end

# from https://medium.com/@adnama.lin/live-messaging-with-rails-5-action-cable-7f009e0c1d8b