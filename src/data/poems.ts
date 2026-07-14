export type Mood = "Longing" | "Devotion" | "Passion" | "Joy" | "Farewell" | "Reflection";

export type ContentType = "poem" | "lsm" | "voicemail";

export interface ArchiveEntry {
  id: string;
  type: ContentType;
  title: string;
  englishTitle?: string;
  poet: string;
  text: string;
  englishText?: string;
  moods: Mood[];
  year?: string;
  audioSrc?: string;
  transcript?: string;
  durationLabel?: string;
  voicemailStyle?: "standard" | "song";
  voiceWarning?: string;
}

export type Poem = ArchiveEntry;

// all poems here are currently just temporary.
// deal with me for now.
// all 10 will be in Bikol.

export const poems: ArchiveEntry[] = [
  // poem 1
  {
    id: "1",
    type: "poem",
    title: "Tesis Pasiring Satoya",
    englishTitle: "Thesis To Us",
    poet: "Adriaan M. Dimate | BSCS 4-A",
    moods: ["Devotion", "Joy", "Reflection"],
    year: "2026",
    text: `Taon nag-abot na may dalang batbat,
Sa tahaw kan bangging pinag-pupuyat,
Kabanata garo bagas na gabat,
Palad igwang pinto na pigbubuklat.

Kinaban ko pano nin mga petsa,
Sulat na pula an nagdadikta na,
Kada saldang may panibagong gera,
Sa banggi mayo nin pagpahinga na.

Taramon kong koda buhay ko gayod,
Sistema na pino datos na sunod,
Pagkamoot arog nin sarong silod,
Baybayon na sakuyang tinalikod.

Sa sarong amigo may ngaran duman,
Huyop sa langit kong pano nin uran,
Mayo nin trompeta o kurugkusan,
Kundi pag-usisa sanang nag-ngaran.

Sadit na garo laad nin kandila,
Sa tapos kan aldaw namidbidan ka,
Sa tahaw kan ribok asin problema,
An isip ko palan yaraon na.

MeatLens nag-aagi sa husgado man,
Palad kaini kailangang matangdan,
Sa tahaw kan agi o kinikunan,
May mabansay na istorya nagpunan.

Proyekto nagtindog sa mga ilaw,
Sa atubang nin propesor na puraw,
Sa likod kan mga pormal na aldaw,
May bagong puturong sakong natanaw.

Nakaabot aldaw na nagkakusog,
Pag-asa ko sa kamot nagkukudog,
Sa ikabente nin Mayo nagtindog,
Suldados na halat utos magsunod.

An simbag bako pang sarong sumpaan,
Kundi sarong permiso na may dalan,
Sa bentesyete, pintuan nabuksan,
Sa silensyong aldaw sako nagihan.

Kaya pagkamoot ta nagdakula,
Sa orolay na pano nin pag-ogma,
Mayong parada sa langit ni tala,
Kundi duwang puso na may tama na.

Mga isip ko sunurat sa rawit,
Tinago sadiri sa rimang higpit,
Linya may pagmawot na sako pirit,
Kada tula sumagip oras pilit.

Koda nagin saro man pag-amin ko,
Lohika nakanuod magkapuso,
Nahiling ninda simpleng website gusto,
Pero puso kong nagtuga saimo.

An rayo garo tubig na maalon,
Mahiwas sa tahaw kan mga baybayon,
Kada mensahe sako nag-inayon,
Nag-giya sako urog pa kan noon.

May olang na dai ta man pinili,
Mga bagyong dai ta apod digdi,
Nagdanay sa bangging madiklom pirmi,
Nagtutubod sa aga na saro ni.

An aldaw maluway na nag-abante,
Magabat na garo uran sa gabi,
Pag-asa asin takot magkabali,
Naghahalat sa lanob na madali.

Hunyo nagdara huyop sa pasilyo,
An paros bagong garo bago totoo,
May nagbabago na daing mahiling,
Garo agang nag-aandam kan bining.

Nag-abot an ikagasiyam—tunay,
Petsang ukit sa sakuyang kalag na marhay,
Mayong kanta na nagtukar sa bintana,
Pero an kinaban nakumpleto na.

Asin kan simbag mo sakong makua,
Taon nagsilensyo nawara duda,
An natada sana pusong nagkaba,
Inuutro totoong pambihira.

Paghuna ko tesis gigibong dalan,
Ngaran ko sa pahina susuratan,
Pero sa mga petsa suraton man,
Gugma uminabot sa may purtahan.

Kaya paghiling ko sa kabanata,
Sa gabos na gabat na sinapo na,
Bako lang sarong tesis natapos ko--,
Nahiling ko dalan pasiring saimo.`,
    englishText: `The year arrived with iron on its back,
Dragging deadlines across sleepless floors.
I carried chapters like sacks of wet grain,
Not knowing fate had opened another door.

My world was numbered by tasks and dates,
By comments scribbled in crimson ink.
Each sunrise demanded another battle,
Each midnight refused to let me sink.

I spoke the language of code and data,
Of models trained and systems refined.
Love was a country beyond my borders,
A distant shore I had left behind.

Then through a friend came a quiet name,
A whisper crossing my crowded skies.
No thunder rolled, no trumpets sounded,
Just curiosity in disguise.

What started small like a candle's flame
Began to linger when day was through.
Among the noise of reports and meetings,
I found myself thinking of you.

Meanwhile MeatLens marched toward judgment,
Its fate awaiting a panel's gaze.
Yet somewhere between defense and revision,
A gentler story entered my days.

The project stood before lights and questions,
Before professors and careful eyes.
Yet hidden behind the formal proceedings,
Another future began to rise.

Then came the day I gathered courage,
Holding my hope with trembling hands.
The twentieth of May stood before me,
A soldier awaiting his last commands.

The answer was not a final promise,
But permission to begin the way.
On the twenty-seventh, a gate was opened,
And I stepped through that quiet day.

So courtship grew in ordinary moments,
In conversations carried by light.
No grand procession crossed the heavens,
Only two hearts learning what felt right.

I wrote my thoughts into patient verses,
Hiding pieces of myself in rhyme.
Each stanza carried a silent longing,
Each poem a fragment rescued from time.

Then code became another confession.
Lines of logic learned how to feel.
What others saw as a simple website,
Was a heart revealing what words conceal.

Distance remained like restless waters,
Stretching wide between shore and shore.
Yet every message became a lantern,
Guiding me farther than before.

There were obstacles neither of us chose,
Storms not summoned by your hand or mine.
Still we remained through uncertain evenings,
Trusting tomorrow would arrive in time.

The days moved slowly toward an answer,
Heavy as rain before it falls.
Hope and fear shared the same small room,
Waiting within unfinished walls.

June carried whispers through every hallway.
The air itself seemed strangely new.
Something was changing beyond perception,
Like dawn preparing its first bright hue.

Then came the nineteenth—soft yet mighty,
A date now carved within my soul.
No orchestra played beyond the window,
Yet suddenly the world felt whole.

And when your answer finally reached me,
The years grew silent, the doubts withdrew.
All that remained was a trembling heartbeat,
Repeating one impossible truth.

I thought this thesis would earn a future,
A name upon a graduate's page.
Yet somewhere between the drafts and deadlines,
Love stepped quietly onto the stage.

So when I look at those worn-out chapters,
At every burden I once pushed through,
I see more than a manuscript finished—
I see the road that led to you.`
  },
  {
    id: "2",
    type: "poem",
    title: "Maski an Signal Magpalya",
    englishTitle: "Even When the Signal Fails",
    poet: "Adriaan M. Dimate | BSCS 4-A",
    moods: ["Devotion", "Longing", "Reflection"],
    year: "2026",
    text: `Igwang mga banggi na pano nin uran,
Mensaheng nalunod sa may kadagatan,
An langit matoninong garong gapo man,
Mayong kasigurohan sa may pintuan.

Mga account nawara sa diklom bigla,
Garo harong na binayaan sa baha,
Mga ngaran nawara sa dating sadya,
Mga hapot sana an natada ninda.

Paagi kan kinaban kitang purbaran,
Bako sana sa gerang may kakusugan,
Minsan sa mga simbag na nawawaran,
Kahadit sa irarom kan katawuhan.

Sarong notipikasyon biglang mapara,
Sarong orolay nawaran nin istorya,
Ngonian bangging pano nin mga pag-ogma,
Dangan masunod silensyo na sobra na.

Aldaw na takot abot dai inagda,
Sa sakong isipan ini matukaw na,
Istorya sa anino pinaggibo na,
Naghahanap simbag na dai makua.

Dalan tang linakwan di pirming deretso,
Buhay mas pili an salog bakong gapo,
Pigabago mapa ta maski paano,
Nawalat magbalay sa daing siguro.

Alagad kada bagyo may katukduan,
Kusog kan gamot sa tios nagtubo man,
Mga kahoy nag-agi nin kabagyuhan,
Minabati sa aga tapos kan uran.

Aram ko pagkamoot bakong sirungan,
Na pinatindog sa silnag kan langitan,
Ini sarong lampara na malaad man,
Kun an daguldol yanig sa katahawan.

Dagat dai nakiherak sa barko man,
Paros dai minaluya ning suguan,
Marinero padagos sa paglayagan,
Tiwala sa kompas sa mga kamotan.

Kaya ako nagtener dai pinungan,
Sa kada lanob nagtindog sa harapan,
Bako ta dalan nagin mas magian man,
Ta aram nin puso ko an paduduman.

Kinaban nag-apon rayo sa agihan,
Pinalaba horizonte sa puluhan,
Pero an rayo di nagin kakulungan,
Nagtukdo lang kun pano mangibabawan.

Kun an signal raot accounts pinara man,
Kun an kada channel garo sarado man,
Naghanap kita dalan sa toninongan,
Garo salog hanap bulos kan tubigan.

May mga bagyo na di ta pinaghagad,
Mga laban dai plano nining palad,
Pero padagos lang an satong paglakad,
Dai binitawan mga kamot nanggad.

Bukid sa tahaw kan satong puturo man,
Panganuron mahibog na hilingon man,
Pero nagtutubod sa likod nin dalan,
Naghahalat an agang para sato man.

Mga banggi may takot rason nawara,
An diklom mas dakula sa banaag na,
Pero kada saldang isarong sumpa na,
Pinakahalabang banggi maagi pa.

Ta ano man gugma kun di pagtiyaga,
Silensyong pili binago kada aga,
Di lang sasabihon na oras maogma,
Kundi binubuhay kun ginhawa wara.

Dai ko pangako langit na perpekto,
O dalan mayong luha asin peligro,
Kinaban pinorma kan sakit totoo,
Maski mga salog ukit uran mismo.

Pero ini sumpa ko daing duda na,
Kun an mga paros magpuno bangon pa,
Dai mo ini harapon solo sana,
Ni labanan bagyo nin matang pagal na.

Kun alon maglangkaw lampas sa sokulon,
Kun aram tang tanda malabo hilingon,
Ako matetener digdi sa baybayon,
May kapot na ilaw dalang pasiringon.

Asin kun kinaban ribok minabangon,
O warakon plano sa dagat nag-alon,
Kada pagtaob iutro sasabihon:

          Ako matener.
          Matener kaibahon.`,
    englishText: `There were evenings swallowed whole by rain,
When messages drowned before reaching shore.
The sky held silence like a heavy stone,
And certainty knocked at no one's door.

Accounts vanished into sudden darkness,
Like houses abandoned after a flood.
Names disappeared from familiar places,
Leaving only questions where they once stood.

The world has strange ways of testing people,
Not always through battles grand and loud.
Sometimes it comes through missing replies,
And worries hidden beneath a crowd.

A single notification can vanish,
A conversation can lose its thread.
One moment laughter fills the evening,
The next is silence hanging overhead.

There were days when fear arrived uninvited,
Taking a seat beside my mind.
Building stories from scattered shadows,
Searching for answers it could not find.

The roads we walk are rarely level,
Life prefers rivers over stone.
It bends our maps without permission,
And leaves us crossing depths unknown.

Yet every storm revealed a lesson:
The strongest roots grow under strain.
The trees that weather countless tempests
Still greet the morning after rain.

I learned that love is not a shelter
Built only for fair and gentle skies.
It is a lamp kept burning softly
When thunder shakes the midnight skies.

The sea does not ask ships for mercy.
The wind does not soften its command.
Yet sailors continue steering forward,
Trusting the compass in their hand.

And so I stayed through every setback,
Through every wall that rose ahead.
Not because the road became easier,
But because my heart knew where it led.

The world threw distance across our pathway,
Stretching horizons from end to end.
Yet distance failed to become a prison;
It merely taught us how to transcend.

When signals broke and accounts were taken,
When every channel seemed to close,
We searched for pathways through the silence,
Like rivers finding where water flows.

There were storms we never asked to weather,
Battles neither of us had planned.
Yet somehow we kept moving onward,
Refusing to loosen our joined hands.

The mountains stood between our tomorrows,
Wrapped in clouds too thick to see.
Still I believed beyond the ridges
Waited the future meant to be.

Some nights carried more fear than reason.
The darkness seemed larger than the dawn.
Yet every sunrise proved a promise:
The longest night still moves along.

For what is love if not persistence?
A quiet choice renewed each day.
Not merely spoken in bright moments,
But lived when comfort fades away.

I cannot promise skies unbroken,
Or roads untouched by grief and strain.
The earth itself is shaped by hardship;
Even rivers are carved by rain.

But I can promise this with certainty:
When stronger winds begin to rise,
You will not face them standing alone,
Nor battle storms with weary eyes.

If tides should climb beyond their limits,
If all familiar landmarks blur,
I will remain beside the shoreline,
Keeping a light that points to her.

And should the world grow loud with chaos,
Or scatter our plans across the sea,
Let every wave repeat one answer:

          I stay.
          And I will stay.
          With thee.`
  },
  // placeholders only, will be replaced 
  {
    id: "3",
    type: "poem",
    title: "Kun an Rayo an Naghuhugas kan mga Pinggan",
    englishTitle: "When Distance Washes the Dishes",
    poet: "Adriaan M. Dimate | BSCS 4-A",
    moods: ["Devotion", "Passion"],
    year: "2026",
    text: `May mga banggi na pinagmamawot ko,
    Na sa saimo kamot ko makaabot;
    Tanganing pasan mo ako mapagian,
    Asin mabantayan an puso mong mahal.
    
    Aram kong may aga na magabat sana,
    Asin silensyo halabaon na marhay,
    Gabos na gibobon sarong padusa man,
    Pero tinindogan ta aram mo kaya.
    
    Kun pwede lang ako sa pinto kumatok,
    Riribayan ko nin ginhawa su kulogl
    Ako na mahugas mga pinggan diyan,
    O makisayaw sa pagbuhos nin uran.
    
    Masighind ako bago pa maglakaw ka,
    Magluto kakanon bago pa dumiklom,
    Dahrahon an gabat kan saimong pasan
    Asin ako an saimong hangaloan.
    
    Pasabi ako na, "Mahal, tama na yan,
    Magtukaw digdi asin maoaghinalo.",
    Mahagad man nanggad an kinaban bukas,
    Pero sa kugos ko may katoninongan.
    
    Alagad nguyan pangadyi lang an yaon,
    Asin taramon na nagbabalyo banggi;
    Dai ta ka makaptan pag naghihibi,
    Pero aram nin langit mahigot ako.
    
    Kaya mahalat na warang pagreklamo,
    Kundi may pusong handang magtios ngunyan;
    Ta sa bawat aga na minalabas lang,
    Harani kita sa pangakong totoo.

    Sa sarong aldaw daing iskrin sa tawa,
    Warang rayo na mahabon nin minuto;
    Daing takot sa matoninong na banggi,
    Daing luha ta uya na ako digdi.

    Sa sirong nin sarong bubong mamata man,
    Mahiling an harong sa hiyom ta ngunyan;
    Magibo nin buhay sa bawat sandali—
    Pagkamuot na matoninong, mararom.

    Asin kun dumatong an aldaw na iyan,
    Bagyong inagihan magsasabi na lang:
    Na bakong daing hirap an pagkamuot,
    Kundi pagpili dawa na naluluya.

    Sagkod na mahiling kitang mangingisi,
    Malakaw sa gilid minsan marayo man.
    Ta an rayo sukol lang nin satong dalan—
    Dai nasusukol pagkamuot ko man.

    Kaya sa monthsary uya ining sumpa:
    Mahalat may paglaom sa mga bagyo.
    Asin pag an satong paghalat tapos na,
    Kita mag-iba sa katoninongan na.`,

    englishText: `There are nights I wish these hands could reach
Beyond the miles that keep us two apart;
To lift the weight your weary shoulders bear,
And gently guard your fragile, faithful heart.

I know there are mornings left too heavy,
Where silence lingers longer than it should;
Where every chore becomes another burden,
Yet still you stand because you know you could.

If only I could knock upon your doorway,
I'd gladly trade my comfort for your pain;
I'd wash the dishes waiting by the sink,
Or dance with you beneath the pouring rain.

I'd sweep the floor before your footsteps found it,
Prepare our meal before the daylight ends;
Carry the bags too heavy for your shoulders,
And be the quiet place your spirit mends.

I'd tell you softly, "Love, you've done enough now.
Come sit with me and let your worries cease."
The world may ask so much from your tomorrow,
But in my arms you'd only have your peace.

Yet all I have today are whispered prayers,
And words that cross the distance every night;
I cannot hold your hand when tears are falling,
But Heaven knows I'm holding on with might.

So I will wait—not with reluctant patience,
But with a heart determined to endure;
For every dawn that passes brings us closer
To all the promises our love keeps sure.

One day there'll be no screens between our laughter,
No miles to steal the moments that we share;
No fear to shadow simple, quiet evenings,
No lonely tears because I wasn't there.

Instead, we'll wake beneath the selfsame rooftop,
Where home is found in every smile we keep;
We'll build a life from countless little moments—
The kind of love that lingers calm and deep.

And when that day arrives, my dearest darling,
The storms we've crossed will only tell our tale:
That love is not the absence of all hardship,
But choosing still, when everything seems frail.

Until that morning finally finds us smiling,
I'll walk beside you, though from far away.
For distance only measures roads between us—
It never measures how my heart will stay.

So on this monthsary, hear my solemn promise:
I'll wait with hope through every passing weather.
And when the waiting writes its final chapter,
We'll live our quiet ever after—together.`
  },
  // placeholders only, will be replaced
  {
    id: "4",
    type: "poem",
    title: "Kun Katuninungan May Pagkatakig Pa",
    englishTitle: "When Peace Still Trembles",
    poet: "Adriaan M. Dimate | BSCS 4-A",
    moods: ["Devotion", "Reflection"],
    year: "2026",
    text: `An kalangitan ngunyan matuninungon,
Alagad may bagyong nagtotok sa porta.
Katuninungan na maluya sa aldaw,
Alagad an hadit dai napapawi.

Kada aga may paglaom na mag-adal,
Abuton an manga mawot kan boot mo.
Alagad lambang lakdang pinapapundo,
Garu baga bawal kang maglayag ngunyan.

Aram ko an gabat na nasa daghan mo,
Manga silensyong hadit na daing untok.
An pagmawot na maglakaw sa iskwela,
Mantang may kadenang dai mo nahiling.

Dai dapat makimaherak an aki,
O mag-isip kun papayagan sa aga.
Sa kulog na yaon diyan sa mata mo,
An imong kusog padagos na mabutwa.

Maski an manga aldaw di sigurado,
Mayong pader na makakulong sa isip.
An imong mawot mas lawas pa sa iba,
Nasusurat kun sain dai pundohon.

Kun an simbag garu baga bako ngunyan,
Asin an paglaom baga kinukua.
Tandaan mo na may sarong nagtutubod,
Sa maabot na nasa manga kamot mo.

Dai ko makua an ralaban diyan,
O patuninungon an manga bagyo man.
Alagad maiibahan taka sa uran,
Sagkod na hanapon kan saldang an ngisi.

Kun an luha tuminulo sa madiklom,
Dai mo dapat itago an luha mo.
An nagkukulog mong puso dai solo,
Dadarahon ta iyan maski magabat.

An dalan masakit, saka an pagsakat,
Alagad nagkusog an gamot sa sirong.
Maski an pinakahalangkaw na poon,
Nagtindog sa manga bagyong umaagi.

Ipinapamibi kong gabos na trangka,
Mabuksan man sa tamang panahon nanggad.
Asin pag-abot kan aldaw na sinabi,
Mangingisi kita sa kusog tang ini.

An libro naghahalat lang pasensyoso,
Nin mas maliwanag na pahinang bago.
Dai makakansela kan sarong pundo,
Magayon padagos an saimong kwento.

Kun saimong isip pinaparibok man,
Girumdumon dai ka magbabago man.
An liwanag kan puso mo nawalat na,
Nagliliwanag pa sa agi kan bagyo.

Kun bayaan ka kan kinaban magtindog,
Ako an mataram na kaya mo ini.
Sarong lakdang asin saro pang paglakaw,
Sagkod na abuton mo an imong mawot.

Maski sain dadarahon ka kan aga,
O gurano kalibog man kan aagyan.
Yaon sana ako iyo sa taed mo,
Tanganing itaas ka kun matutumba.

Pakusugon an puso namomotan ko,
Mayong bagyo makakua kan biyaya.
Sagkod na an saimong gabat mapara,
Ako padagos saimo maiiba.`,
    englishText: `The skies are quiet, softer than before,
Yet hidden storms still knock upon your door.
A fragile peace now wraps the passing days,
But worry lingers through familiar ways.

Each morning holds a hope to simply learn,
To chase the dreams your faithful heart has earned.
Yet every step is questioned, held too tight,
As if your wings should never seek their flight.

I know the burden resting on your chest,
The silent fears that never seem to rest.
The longing just to walk the schoolyard halls,
While unseen chains answer every call.

No child should have to beg to learn and grow,
Or wonder if tomorrow they'll be allowed to go.
Still through the ache that fills your weary eyes,
Your quiet strength continues to arise.

Though days may feel uncertain and confined,
No prison walls can ever cage your mind.
Your dreams were born beyond another's hand;
They're written where no force can make them stand.

When every answer feels like "not today,"
And hope itself seems slowly pulled away,
Remember there is one who still believes
In every future resting up your sleeves.

I cannot steal the battles from your path,
Nor silence every storm with gentle hands.
But I can walk beside you through the rain,
Until the sunlight finds your smile again.

Should tears arrive when no one else can see,
You never have to hide those tears from me.
Your hurting heart is never yours alone;
We'll carry every burden, stone by stone.

The road is rough, the climb is often steep,
Yet stronger roots are growing underneath.
Even the tallest trees were once so small,
Standing through tempests that refused to fall.

I pray that every closed and heavy gate
Will someday open at the proper date.
And when that morning finally appears,
We'll smile at all the strength built through these years.

Your books still wait with patience in their pages,
For brighter chapters written through the ages.
No pause can ever cancel who you'll be;
Your story still unfolds beautifully.

Whenever doubt begins to cloud your view,
Remember this will never alter you.
The light within your heart remains the same,
Still shining softly through the wind and rain.

If all the world should leave you standing still,
I'll be the voice reminding you, "You will."
One careful step, then one again we'll take,
Until your dreams are yours at last to make.

No matter where tomorrow leads your feet,
Or how uncertain every path may seem,
My place remains beside you through it all—
To lift you every time you fear you'll fall.

So keep your heart, my love, forever brave;
No storm can steal the future Heaven gave.
Until the day your burdens fade from view,
I'll keep believing—and I'll walk with you.`
  },
  {
    id: "5",
    type: "poem",
    title: "[Bikolano title for Bright Star goes here]",
    englishTitle: "Bright Star",
    poet: "John Keats",
    moods: ["Longing", "Devotion"],
    year: "1819",
    text: `[Bikolano translation for Bright Star goes here]`,
    englishText: `Bright star, would I were stedfast as thou art—
Not in lone splendour hung aloft the night
And watching, with eternal lids apart,
Like nature's patient, sleepless Eremite,
The moving waters at their priestlike task
Of pure ablution round earth's human shores,
Or gazing on the new soft-fallen mask
Of snow upon the mountains and the moors—
No—yet still stedfast, still unchangeable,
Pillow'd upon my fair love's ripening breast,
To feel for ever its soft fall and swell,
Awake for ever in a sweet unrest,
Still, still to hear her tender-taken breath,
And so live ever—or else swoon to death.`
  },
  {
    id: "6",
    type: "poem",
    title: "[Bikolano title for He Wishes for the Cloths of Heaven goes here]",
    englishTitle: "He Wishes for the Cloths of Heaven",
    poet: "W. B. Yeats",
    moods: ["Devotion", "Longing"],
    year: "1899",
    text: `[Bikolano translation for He Wishes for the Cloths of Heaven goes here]`,
    englishText: `Had I the heavens' embroidered cloths,
Enwrought with golden and silver light,
The blue and the dim and the dark cloths
Of night and light and the half light,
I would spread the cloths under your feet:
But I, being poor, have only my dreams;
I have spread my dreams under your feet;
Tread softly because you tread on my dreams.`
  },
  {
    id: "7",
    type: "lsm",
    title: "[Bikolano title for Love's Philosophy goes here]",
    englishTitle: "Love's Philosophy",
    poet: "Percy Bysshe Shelley",
    moods: ["Passion", "Longing"],
    year: "1819",
    text: `[Bikolano translation for Love's Philosophy goes here]`,
    englishText: `The fountains mingle with the river
   And the rivers with the ocean,
The winds of heaven mix for ever
   With a sweet emotion;
Nothing in the world is single;
   All things by a law divine
In one spirit meet and mingle.
   Why not I with thine?—

See the mountains kiss high heaven
   And the waves clasp one another;
No sister-flower would be forgiven
   If it disdained its brother;
And the sunlight clasps the earth
   And the moonbeams kiss the sea:
What is all this sweet work worth
   If thou kiss not me?`
  },
  {
    id: "8",
    type: "lsm",
    title: "[Bikolano title for A Glimpse goes here]",
    englishTitle: "A Glimpse",
    poet: "Walt Whitman",
    moods: ["Joy", "Reflection"],
    year: "1860",
    text: `[Bikolano translation for A Glimpse goes here]`,
    englishText: `A glimpse through an interstice caught,
Of a crowd of workmen and drivers in a bar-room around the stove late of a winter night, and I unremark'd seated in a corner,
Of a youth who loves me and whom I love, silently approaching and seating himself near, that he may hold me by the hand,
A long while amid the noises of coming and going, of drinking and oath and smutty jest,
There we two, content, happy in being together, speaking little, perhaps not a word.`
  },
  {
    id: "9",
    type: "voicemail",
    title: "I Want to Write You a Song",
    poet: "One Direction (sang by me for this renditon)",
    moods: ["Devotion", "Longing", "Joy"],
    year: "2013",
    text: `[Verse 1: Harry, Liam]
I wanna write you a song
One as beautiful as you are sweet
With just a hint of pain
For the feeling that I get when you are gone

I wanna write you a song
I wanna lend you my coat
One that's as soft as your cheek
So when the world is cold
You will have a hiding place you can go
I wanna lend you my coat

[Chorus: Louis, Louis & Liam]
Ooh, everything I need I get from you
Ooh, and giving back is all I wanna do

[Verse 2: Liam]
I wanna build you a boat
One as strong as you are free
So any time you think
That your heart is gonna sink, you know it won't
I wanna build you a boat

[Chorus: Louis, Louis & Liam]
Ooh, everything I need I get from you
Ooh, and giving back is all I wanna do, ooh

[Instrumental Bridge]

[Chorus: Harry, Harry & Liam]
Ooh, everything I need I get from you
Ooh, giving back is all I wanna do, ooh

[Outro: Niall]
I wanna write you a song
One to make your heart remember me
So any time I'm gone
You can listen to my voice and sing along
I wanna write you a song
I wanna write you a song`,
    englishText: `[Verse 1: Harry, Liam]
I wanna write you a song
One as beautiful as you are sweet
With just a hint of pain

For the feeling that I get when you are gone
I wanna write you a song
I wanna lend you my coat
One that's as soft as your cheek
So when the world is cold
You will have a hiding place you can go
I wanna lend you my coat

[Chorus: Louis, Louis & Liam]
Ooh, everything I need I get from you
Ooh, and giving back is all I wanna do

[Verse 2: Liam]
I wanna build you a boat
One as strong as you are free
So any time you think
That your heart is gonna sink, you know it won't
I wanna build you a boat

[Chorus: Louis, Louis & Liam]
Ooh, everything I need I get from you
Ooh, and giving back is all I wanna do, ooh

[Instrumental Bridge]

[Chorus: Harry, Harry & Liam]
Ooh, everything I need I get from you
Ooh, giving back is all I wanna do, ooh

[Outro: Niall]
I wanna write you a song
One to make your heart remember me
So any time I'm gone
You can listen to my voice and sing along
I wanna write you a song
I wanna write you a song`
,
    audioSrc: "/audio/i want to write you a song cr var.mp3",
    durationLabel: "3:01",
  },
  {
    id: "10",
    type: "voicemail",
    title: "From Strangers to Us",
    englishTitle: "From Strangers to Us",
    poet: "Adriaan M. Dimate | BSCS 4-A (original composition)",
    moods: ["Longing", "Joy"],
    year: "2026",
    voicemailStyle: "song",
    voiceWarning: "Voice note: this audio was AI-generated with Suno because my vocal range made a recorded take difficult. I’ll redo it in the future; the lyrics are still mine.",
    text: `Verse 1 - The Introduction (May 6)

  A quiet message crossed my way,
  A name I'd never thought I'd say.
  No fireworks lit the evening sky,
  Just one small chance that wandered by.

  I didn't know what time would write,
  Or how you'd slowly change my life.
  One simple "meet her" changed the page,
  Beginning our unwritten stage.

  Pre-Chorus

  Who would've known
  A single hello
  Would become the place
  I'd always call home?

  Chorus

  From strangers into something true,
  One little step led me to you.
  Through every silence, every mile,
  You gave my weary heart a smile.

  Now every dream I hold feels new,
  Because I get to dream with you.
  From that first day until today,
  I'll choose your hand every single day.

  Verse 2 - Finally Talking (May 15)

  The words grew longer every night,
  The hours somehow felt too light.
  We laughed through stories, fears, and dreams,
  Like finding calm in rushing streams.

  The distance never felt so wide,
  Whenever you were by my side.
  Screen to screen, yet heart to heart,
  You slowly became my favorite part.

  Verse 3 - Courtship (May 20-27)

  I asked with hope, but trembling still,
  Not knowing what your heart would feel.
  Each passing day became a prayer,
  Wondering if love was waiting there.

  Then finally your answer came,
  Forever changing everything.
  No grand parade, no crowded room—
  Just joy that filled my quiet room.

  Chorus

  From strangers into something true,
  One little step led me to you.
  Through every silence, every mile,
  You gave my weary heart a smile.

  Now every dream I hold feels new,
  Because I get to dream with you.
  From that first day until today,
  I'll choose your hand every single day.

  Bridge - The Storms

  Accounts disappeared,
  The distance remained.
  Some days were confusing,
  Some nights filled with rain.

  But none of the battles
  Could make me let go.
  Because loving you
  Is the easiest thing I know.

  Final Chorus

  From May until this very day,
  You've painted colors through the gray.
  The story's only just begun,
  Our brightest chapter's yet to come.

  No matter where tomorrow leads,
  Or how long this long distance will be,
  When every mile is finally gone,
  I'll still be singing our first song.

  Outro

  "Hey... I'd like you to meet someone."

  And somehow...

  It became,

  "I love you, my madame."`,
    englishText: `Verse 1 - The Introduction (May 6)

  A quiet message crossed my way,
  A name I'd never thought I'd say.
  No fireworks lit the evening sky,
  Just one small chance that wandered by.

  I didn't know what time would write,
  Or how you'd slowly change my life.
  One simple "meet her" changed the page,
  Beginning our unwritten stage.

  Pre-Chorus

  Who would've known
  A single hello
  Would become the place
  I'd always call home?

  Chorus

  From strangers into something true,
  One little step led me to you.
  Through every silence, every mile,
  You gave my weary heart a smile.

  Now every dream I hold feels new,
  Because I get to dream with you.
  From that first day until today,
  I'll choose your hand every single day.

  Verse 2 - Finally Talking (May 15)

  The words grew longer every night,
  The hours somehow felt too light.
  We laughed through stories, fears, and dreams,
  Like finding calm in rushing streams.

  The distance never felt so wide,
  Whenever you were by my side.
  Screen to screen, yet heart to heart,
  You slowly became my favorite part.

  Verse 3 - Courtship (May 20-27)

  I asked with hope, but trembling still,
  Not knowing what your heart would feel.
  Each passing day became a prayer,
  Wondering if love was waiting there.

  Then finally your answer came,
  Forever changing everything.
  No grand parade, no crowded room—
  Just joy that filled my quiet room.

  Chorus

  From strangers into something true,
  One little step led me to you.
  Through every silence, every mile,
  You gave my weary heart a smile.

  Now every dream I hold feels new,
  Because I get to dream with you.
  From that first day until today,
  I'll choose your hand every single day.

  Bridge - The Storms

  Accounts disappeared,
  The distance remained.
  Some days were confusing,
  Some nights filled with rain.

  But none of the battles
  Could make me let go.
  Because loving you
  Is the easiest thing I know.

  Final Chorus

  From May until this very day,
  You've painted colors through the gray.
  The story's only just begun,
  Our brightest chapter's yet to come.

  No matter where tomorrow leads,
  Or how long this long distance will be,
  When every mile is finally gone,
  I'll still be singing our first song.

  Outro

  "Hey... I'd like you to meet someone."

  And somehow...

  It became,

  "I love you, my madame."`,
    transcript: `Verse 1 - The Introduction (May 6)

  A quiet message crossed my way,
  A name I'd never thought I'd say.
  No fireworks lit the evening sky,
  Just one small chance that wandered by.

  I didn't know what time would write,
  Or how you'd slowly change my life.
  One simple "meet her" changed the page,
  Beginning our unwritten stage.

  Pre-Chorus

  Who would've known
  A single hello
  Would become the place
  I'd always call home?

  Chorus

  From strangers into something true,
  One little step led me to you.
  Through every silence, every mile,
  You gave my weary heart a smile.

  Now every dream I hold feels new,
  Because I get to dream with you.
  From that first day until today,
  I'll choose your hand every single day.

  Verse 2 - Finally Talking (May 15)

  The words grew longer every night,
  The hours somehow felt too light.
  We laughed through stories, fears, and dreams,
  Like finding calm in rushing streams.

  The distance never felt so wide,
  Whenever you were by my side.
  Screen to screen, yet heart to heart,
  You slowly became my favorite part.

  Verse 3 - Courtship (May 20-27)

  I asked with hope, but trembling still,
  Not knowing what your heart would feel.
  Each passing day became a prayer,
  Wondering if love was waiting there.

  Then finally your answer came,
  Forever changing everything.
  No grand parade, no crowded room—
  Just joy that filled my quiet room.

  Chorus

  From strangers into something true,
  One little step led me to you.
  Through every silence, every mile,
  You gave my weary heart a smile.

  Now every dream I hold feels new,
  Because I get to dream with you.
  From that first day until today,
  I'll choose your hand every single day.

  Bridge - The Storms

  Accounts disappeared,
  The distance remained.
  Some days were confusing,
  Some nights filled with rain.

  But none of the battles
  Could make me let go.
  Because loving you
  Is the easiest thing I know.

  Final Chorus

  From May until this very day,
  You've painted colors through the gray.
  The story's only just begun,
  Our brightest chapter's yet to come.

  No matter where tomorrow leads,
  Or how long this long distance will be,
  When every mile is finally gone,
  I'll still be singing our first song.

  Outro

  "Hey... I'd like you to meet someone."

  And somehow...

  It became,

  "I love you, my madame."`,
    audioSrc: "/audio/From Strangers to Us v2.mp3",
    durationLabel: "4:42",
  }
];
