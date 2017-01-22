class Phrase < ApplicationRecord

  enum section: [
    :beginning,
    :ending
  ]
end
