import React from 'react'
import logo from './logo.svg'
import './App.css'
import Details from './Details'

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <h1>Distinguishing between Baltoslavic languages</h1>
        <Details name="Latvian">
          Baltic language, stress almost always on the first syllable and many
          German and East Slavic loanwords, the Latvian accent sometimes sounds
          Finnic. Consonants aren't palatalised before front vowels.
        </Details>
        <Details
          name="Lithuanian"
          audio={[
            'https://cdn.discordapp.com/attachments/524167298945122305/747360164407017532/du_gaideliai.wav',
            'https://cdn.discordapp.com/attachments/524167298945122305/739917706781917188/labas.wav',
          ]}
        >
          Baltic language, stress can appear on any syllable. Consonants are
          slightly palatalised before front vowels. The most beautiful language
          on the planet!
        </Details>
        <Details name="Polish" g={true}>
          West Slavic, many sz, ś, cz, ć, dz, dź, ź, ż and also nasal sounds ę
          and ą, g-language Silesian – West Slavic, like Polish but with a lot
          of German loanwords.
        </Details>
        <Details name="Kashubian" g={true}>
          West Slavic, like Polish, but has a schwa /ə/, opposed to other West
          Slavic languages. Where in Polish there are „y” and „u” there is often
          a schwa in Kashubian and where in Polish there is an „a” in the end of
          feminine nouns, usually there is „ô” (something between „a” and „o”)
          in Kashubian.
        </Details>
        <Details name="Sorbian" g={false}>
          West Slavic, something between Czech and Polish, but with German
          accent, In Lower Sorbian, Polish ć, dź, r -{'>'} ś, ź, š (also accent
          on first syllable), has dual form.
        </Details>
        <Details name="Czech" g={false}>
          West Slavic, contains ř (!) and has specific melody, common long
          consonant clusters, e. g. čtvrt, prst, tvrdý.
        </Details>
        <Details name="Slovak" g={false}>
          West Slavic, like Czech, but lacks ř and has ô /uo/ ĺ /l:/ and ŕ /r:/,
          common long consonant clusters like Czech, e. g. štvrť, prst, tvrdý,
          has more diphthongs than Czech and a very beautiful melody, Slovak
          uses international names of months unlike Czech: január (SK) = leden
          (CZ), február (SK) = únor (CZ) etc.
        </Details>
        <Details name="Slovenian" g={true}>
          South Slavic, fluctuant melody like Serbo-Croatian, very similar to
          distinguish from Serbo-Croatian.
        </Details>
        <Details name="Serbo-Croatian" g={true}>
          South Slavic, fluctuant melody like Slovenian. Croatian has months of
          Slavic origin, Serbian has international: kolovoz (HR) = Август
          /avgust/ (SRB)
        </Details>
        <Details name="Bulgarian" g={true}>
          South Slavic, contains the letter ъ (/ɤ/, [ɐ]), has definite articles
          in form of suffixes and they use them instead of declension, e.g. село
          /selo/ (village) - до селото /do seloto/ (to the village)
        </Details>
        <Details name="Macedonian" g={true}>
          South Slavic, like Bulgarian, but lacks ъ and has ѓ [ɟ] and ќ [c]
        </Details>
        <Details name="Russian" g={true}>
          East Slavic, you know how it sounds, written „o“ changes into /a/ when
          not stressed, more loanwords (Turkic and International)
        </Details>
        <Details name="Belarusian" g={false}>
          East Slavic, sounds like Russian, but has a lot more „a“ vowels (and
          they write almost each of them), has stronger palatalisation
        </Details>
        <Details name="Ukrainian" g={false}>
          East Slavic, sounds like Russian, but does not use /a/ instead of /o/,
          and Ukrainians write the letter „i“ wherivir it is pissible, e.g. міст
          /mist/ (UKR) = мост /most/ (RUS)
        </Details>
        <Details name="Rusyn" g={false}>
          East Slavic, something between Slovak and Ukrainian,accent on
          penultimate syllable, ы is [ɯ]
        </Details>
        <Details name="Old Church Slavonic" g={true}>
          similar to Bulgarian, has some odd vowels like ą, ę and ě
        </Details>
        <div style={{ marginTop: 40 }}>
          <a href="https://discord.gg/Q88cXu">#balto-slavic</a> gang 2020
        </div>
      </main>
    </div>
  )
}

export default App
