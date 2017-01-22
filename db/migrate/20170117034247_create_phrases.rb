class CreatePhrases < ActiveRecord::Migration[5.0]
  def change
    create_table :phrases do |t|
      t.string :words
      t.integer :section

      t.timestamps
    end
  end
end
