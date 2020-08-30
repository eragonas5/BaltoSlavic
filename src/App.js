import React from 'react'
import logo from './logo.svg'
import './App.css'
import Details from './Details'

function App() {
  return (
    <div className="App">
      <main className="App-header">
        Hi
        <Details name="Latvian">
          Baltic language, stress almost always on the first syllable and many
          German and East Slavic loanwords, the Latvian accent sometimes sounds
          Finnic. Consonants aren't mandatory palatalised before front vowels.
        </Details>
        <Details
          name="Lithuanian"
          audio="https://cdn.discordapp.com/attachments/524167298945122305/747360164407017532/du_gaideliai.wav"
        >
          Baltic language, stress can appear on any syllable. Consonants are
          slightly palatalised before front vowels. The most beautiful language
          on the planet!
        </Details>
        <Details name="Polish">
          West Slavic, many sz, ś, cz, ć, dz, dź, ź, ż and also nasal sounds ę
          and ą, g-language Silesian – West Slavic, like Polish but with a lot
          of German loanwords, g-language
        </Details>
      </main>
    </div>
  )
}

export default App
