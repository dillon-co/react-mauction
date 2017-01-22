class PhrasesController < ApplicationController
  def index
    @beginning_phrases = Phrase.where(section: :beginning)
    @ending_phrases = Phrase.where(section: :ending)
    @new_phrase = Phrase.new
  end

  def add_phrase
    phrase = Phrase.create(params[:phrase_params].as_json)
    respond_to do |format|
      format.js {render nothing: true}
    end
  end

  def random_phrase
    words, random_number, give_or_get = Phrase.all.sample.words, SecureRandom.random_number(200).round(-1)
    give_or_get, person_type = ["gets", "owes"].sample, ['first to', 'last to', 'Everyone here'].sample
    phrase_attributes = {words: words, random_number: random_number, give_or_get: give_or_get}
    respond_to do |format|
      format.json { render json: phrase_attributes }
    end
  end
end
