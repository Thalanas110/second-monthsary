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
    moods: ["Devotion", "Longing"],
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
    title: "Sarong Pangarap, Sarong Harong",
    englishTitle: "One Dream, One Home",
    poet: "John Keats",
    moods: ["Longing", "Devotion"],
    year: "1819",
    text: `Ako nangangarap lagpas sa aldaw ta,
Lagpas sa dalan na tatangkaon ta pa.
Bako an yaman o koronang hihiling,
Kundi an paggibo nin aga tang duwa.

Manga agang matuninung an liwanag,
Kun sain an ngisi pupukawon aga.
Sarong sadiit na harong tang ginibo,
Pagkamoot nguna bago an ladrilyo.

Abuton an satong mawot nin makusog,
Sa manga banggi nin puyat asin plano.
Bakong makihadal sa pilak na ngaran,
Kundi nagkukusog sa lambang aga man.

Susuraton ining kodigong may onra,
Pipintahan mo imong aga sa arte.
Maski ibang dalan an pilion ta man,
Idadara ako padagos sa imo.

Kun umabot an panggana dawa diit,
Maoogma kita sa gabos na iyan.
Ta lambang bukid na sakaton nin saro,
Magiging panggana kan satong buhay man.

Kun saro satuya matumba sa dalan,
An saro dai basta basta mahali.
Matao nin kusog sagkod na mauma,
Iyan an gigibuhon nin pagkamoot.

Manga banggi pagkatapos nin trabaho,
Kun an ribok kan siyudad nawawara.
Matukaw kita nin pasasalamat man,
Makukua katuninungan sa taram.

Siguro an estante ta mapapano,
Nin manga retrato na di mahahabon.
Lambang saro ipapagirumdom baga,
Haling pangarap sagkod sa satong harong.

Padagos kitang mag-adal sa paggurang,
Hanapon dunong asin katotoohan.
An panggana bako sanang satong kita,
Kundi an manga buhay na inaalsa.

Nangangarap kong ngisi mo daing gabat,
Sa manga agang tinung daing paghadit.
An pagal mong puso makaginhawa man,
Aram na an aga mag-aako imo.

Matindog kita sa manga bagyong abot,
Bakong duwang estranhero naghahalat.
Kundi magkataed bungkos an kusog ta,
Makusog na laom di mabubuwatag.

Manga mawot ta ngunyan pwede mabago,
Pag-agi nin init asin manga bagyo.
Alagad sarong mawot dai masuhay,
Tangonan an lambang saro dyan sa puso.

Sa ilang taon satong hihilingon man,
An dakol na pamibi sa satong aga.
An luhang tunuro lakdang sa pagtubod,
Naghahanda kita nin urog na aga.

Kaya mangarap kitang may paglaom man,
Asin magtubod sa nagsusurat sato.
Ta lambang biyaya naghahalat diyan,
Mas importante ta nagtabangan kita.

Sagkod umabot an urog na pangarap,
An pilion kong aga yaon saimo.
Bako lang panggana o manga sadiri,
Kundi maggurang nag-iiba sa harong.`,
    englishText: `I often dream beyond the days we know,
Beyond the roads we're only starting to go.
Not riches first, nor crowns for all to see—
But building every tomorrow, you and me.

I dream of mornings filled with quiet light,
Where laughter gently wakes the dawn so bright.
A little home we've patiently designed,
Built first with love before the bricks align.

We'll chase our callings with determined hands,
Through sleepless nights and carefully laid plans.
Not racing others for a fleeting name,
But growing stronger with each passing day.

I'll write my code with purpose in my heart,
You'll paint your future through your chosen art.
Though different roads may shape the work we do,
They'll always lead me safely back to you.

When victories arrive, both great and small,
We'll celebrate together through them all.
For every mountain either one may climb
Becomes a triumph shared across our lives.

And if one stumbles somewhere on the way,
The other will not simply walk away.
We'll lend our strength until the wounds grow few,
For that's what hearts in faithful love will do.

I dream of evenings after honest work,
When all the city's noise begins to blur.
We'll sit together, grateful for the day,
Finding our peace in simple words we say.

Perhaps our shelves will slowly start to fill
With photographs that time can never steal.
Each one reminding us how far we've come,
From distant dreams into a place called home.

We'll keep on learning long beyond our youth,
Still chasing wisdom, kindness, grace, and truth.
Success will never simply mean our gain,
But lives we've lifted through our joy and pain.

I dream you'll smile without the weight you bear,
With quiet mornings free from every fear.
Your weary heart at last can breathe anew,
Knowing tomorrow welcomes only you.

We'll stand before the storms that life may send,
Not as two strangers hoping they'll soon end,
But side by side, our courage intertwined,
With steadfast hope no hardship can unwind.

The goals we write today may change their form,
As seasons pass through sunshine and through storms.
Yet one desire will never drift apart:
To keep each other safely in our hearts.

Years from now we'll look behind and see
The countless prayers that shaped our destiny.
The tears we cried, the miles we walked in faith,
Were all preparing brighter yesterdays.

So let us dream with patient, hopeful eyes,
And trust the Author writing both our lives.
For every blessing waiting down the road
Will mean far more because we shared the load.

Until that day our greatest dreams come true,
My favorite future still begins with you.
Not just success, nor all that we may own—
But growing old, together, finally home.`
  },
  {
    id: "6",
    type: "poem",
    title: "Kun Nahanap Taka Kuta Kasuodma",
    englishTitle: "If Only I Had Found You Sooner",
    poet: "Adriaan M. Dimate | BSCS 4-A",
    moods: ["Devotion", "Longing"],
    year: "1899",
    text: `Minsan mawot kong nagkabisto tang amay,
Bago an kinaban naghagad nin labi.
Tibaad igwa pang rason na mangisi,
Kamot na makusog sa lambang pag-agi.

Patawad kun ako uminabot huri.
Puso mo may darang gabat kasuodma.
Dai maribayan pahinang nawalat,
Alagad tatabangan kang magsurat man.

Patawad sa rayo na nagsuhay sato.
May aldaw na mawot ko sanang dumaan.
Matukaw sa taed kan saimong puso,
Asin sabihon na magigin marhay man.

Dai mo kuta ini dinarang solo.
Kapatapat mo an agang matuninong.
Buhay na an ngisi daing inulangan,
Asin an pangarap talingkas maburak.

Alagad pag naghihiling sa mata mo,
Dai ko nahiling an sarong raot man.
Sarong babaying kusog di niya aram,
Nagpipiling laom maski na masakit.

Kaya kun maaga masakit man diit,
Boses ko sana an magin pahingalo.
Dai itatago saimong kalag man;
Aakuon kan puso ko an gabos man.

Di maitangako mawara an bagyo.
Dai ka matatahoban sa lugad man.
Alagad dai taka babayaan man;
Ini an panugang nasa sakong puso.

Matindog sa taed maski harayo ka.
Sa lambang pagbalo sa dalan tang ini.
An rayo suhayon man sakuyang kamot,
Alagad an pagkamoot makaabot.

Kun an takot kinukua an ngisi mo,
Tandaan na ako sarong apod sana.
Madanay sagkod ginhawa mapataning,
Gigirumdumon na igwa pang saldang man.

Bantayan an pangarap garu sakuya.
Kukusgan an lakdang na nagdadara man.
An saimong panggana sakong orgulyo,
Huli ta an aga mo mahalaga man.

Pamibi kong puso mo makakua man,
Nin buhay na saldang daing gabat baga.
Harong na magin lugar kan kaogmahan,
Asin an pagkamoot daing hadit man.

Sagkod duman, pilion ko an kamot mo.
Sa aga man, asin sa manga masunod.
Bakong sa obligasyon, o taram sana,
Kundi ta ako namomoot saimo.

Kun namidbid taka sana kaidto pa...
Dina ka nagluha nin kadakul baga.
Maski huri na, an panuga ko yaon:
Kakamuton taka sa satuyang taon.

Sandal sakuya kun buhay magabaton.
Sasarong lakdang satong aatubangon.
Di na kaipuhan ipahiling kusog;
Aalsahon ko an gabat na makaya.

Namomotan, huri man ako saimo,
Asin ako tibaad harayoon man.
Alagad poon nagin saro an puso,
Poprotektaran taka sa danay nanggad.`,
    englishText: `Sometimes I wish we'd met much sooner, my love.
Before the world had asked so much of you.
Perhaps I'd bring one more reason to smile,
One steady hand through every passing day.

I'm sorry that I entered far too late.
Your heart had carried burdens long before.
I cannot change the pages left behind,
But I can help you write the ones ahead.

And I'm still sorry distance keeps us far.
There are days I long to simply be there.
To quietly sit beside your weary heart,
And tell you everything will be alright.

You never should have carried this alone.
You deserved mornings filled with gentle peace.
A life where smiles arrived without a fight,
And every dream could freely learn to bloom.

Yet every time I look into your eyes,
I never see someone the world has broken.
I see a woman stronger than she knows,
Still choosing hope despite the hardest days.

So when tomorrow feels a little hard,
Please let my voice become your place of rest.
You never have to hide your weary soul;
My heart will always welcome every part.

I cannot promise every storm will end.
I cannot shield you from each wound ahead.
But I will never leave you on your own;
That is a promise written in my heart.

I'll stand beside you whether near or far.
Through every trial waiting down the road.
The miles may keep my hands away today,
But never keep my love from reaching you.

Whenever fear begins to steal your smile,
Remember I am always just one call.
I'll stay until your breathing settles down,
And remind you brighter days still remain.

I'll guard your dreams as if they were my own.
I'll cheer each step that carries you ahead.
Your victories will always make me proud,
Because your future matters just as much.
.
I pray one day your heart finds lasting peace.
A life where every sunrise feels so light.
Where home becomes a place of quiet joy,
And love no longer needs to fear the day.

Until that day, I'll keep choosing your hand.
Again tomorrow, and the days beyond.
Not out of duty, nor out of mere words,
But because loving you is who I am.

If only I had found you years before...
Perhaps I'd spare you tears I cannot count.
Though I was late, my promise still remains:
I'll love you with the years that now are ours.

So lean on me whenever life feels heavy.
We'll face each season one small step at once.
You never have to prove you're always strong;
I'll gladly carry what I safely can.

My love, I may have come into your life late,
And I may still be many miles away.
But from the day our hearts became as one,
I'll do my best to keep you safe, always.`
  },
  {
    id: "7",
    type: "poem",
    title: "Kan Saimong Lakdang Pasiring sa Aga",
    englishTitle: "When You Walked Toward Tomorrow",
    poet: "Percy Bysshe Shelley",
    moods: ["Devotion", "Longing", "Joy"],
    year: "1819",
    text: `Kasu banggi nangiturogan ako man,
An kalangitan pinintahang bulawan.
An simbahan nag-aabang sa liwanag,
Asin kalangitan naghutik, "Uya na."

Sinalo kan bintana an bagong saldang,
Kumbong an init sa kahoy na tukawan.
An duros pano nin silensyong pamibi,
Garu baga anghel nagginhawang tonong.

Burak namukadkad nin silensyong gayon,
Puting sampaguita nakakorona man.
Lambang sadit na burak baga nagsabi,
"Ngunyan na an poon nin pagkamoot ta."

Tapos musika luhay-luhay na ngunob,
Sarong awiton na malomhok, totoo.
Mayong boses binaruso; mayong takot,
Sagkod an silensyo nagin magayonon.

Pinto nagbukas garu pagbutwang saldang,
An liwanag sa likod mo bulawan man.
Sa sarong hinangos kinaban nagpundo,
Garu lalang mawot hilingon ngisi mo.

Naglakdang ka nin saro, tapos saro pa,
An belo sa duros aga minakuyog.
Lambang lakdang sa puso ko naglalanog,
Garu pangarap nakanood paghangos.

An mata mo puros kaugmahan, luha,
Bakong gikan sa mundong nakaagi na,
Kundi sa paglaom na nagin totoo—
Panugang naghahalat sa likod ngisi.

Bado mo luhay na garu panganuron,
Lambang sagbay may saldang haling itaas.
Mayong alahas madaog sa nahiling,
Kalinaw kan pusong patos pagkamoot.

An manga kandila makirab sa dalan,
Sadiit na laad laban sa duros man.
Baga nag-uusipon nin satong puso:
Naglalaad sagkod sa umaging taon.

Hinihiling kong nawara an harayo,
Kada lakdang nagin agang minarani.
An dalan dai na baga halabaon,
Baga sana ako mauli sa harong.

An koro nag-awit nin boses na linaw,
Tinogma pader baga hutik na laom.
Bilog na simbahan nahingos sa himno,
Baga naogma sa simbag na pamibi.

Sa luwas, an aga naghahalat sana,
Manga poon nagduko sa huyop duros.
Maski man saldang uminuntok sa pinto,
Habong palampason idtong kaugmahan.

Inisip ko an manga dalang nagdara,
Milyang inagihan ta sa pagtubod lang.
Dai mabilang na pamibi sa banggi,
Ngunyan namumurak para hilingon ta.

Mayong ribok nin pag-aapura diyan,
Dai na kaipuhan hidawon ini.
An oras kaini garu daing sagkod,
Balaog na andam bago pa nginaran.

Kalmado kamot mo maski pano puso,
Ngisi mo may darang rinibong pangarap.
An sadit na aking nagmawot nin toltol,
Yaon pa sa babaying nakatindog dyan.

Sa imong manga mata mayong hadit man,
Kundi sarong agang minabukas pinto.
An gabat nin suodma luminain na,
Kan paglaom naging tataramon puso.

An kampana pinukaw bilog na duros,
Maogmang awit naglakaw sa banwaan.
Bakong garu batbat na kinaputan man,
Kundi an langit nag-aawit sato man.

Pangarap luminubad sa pag-aaga,
Musika inanod luhay-luhay duros.
Alagad gabos na kulay nag-iwalat,
Garu manga panugang di babayaan.

Nagimata ako bago pa natapos,
Simbahan nawara sa pagbutwang saldang.
Alagad sarong gayon dai nahali:
Saimong paglakdang pasiring sa aga.

Kun an pangarap na ini naging buhay,
Mabalos sa Diyos nadangog an pamibi.
Ta bago satuyang inabot an dalan,
Nagsurat Siya lakdang sa namomotan.`,
    englishText: `Last night I dreamed a quiet Sunday dawn.
The skies were brushed with gentle shades of gold.
The church stood waiting in the morning light,
As heaven softly whispered, "She has come."

The windows caught the rising morning sun,
Its warmth embracing every wooden pew.
The air was filled with calm and silent prayers,
Like angels breathing peace into the room.

The flowers bloomed with simple, quiet grace.
White sampaguitas crowned the waiting aisle.
Each little blossom seemed to gently say,
"Today begins a lifetime built on love."

Then all at once the music slowly rose.
A melody both gentle and sincere.
No voice was hurried; no heart raced with fear.
Even the silence sounded beautiful.

The doors unfolded like the break of dawn.
The light behind you painted you in gold.
For just a breath the whole world stood so still,
As though creation wished to watch you smile.

You took one step, then slowly took one more.
The veil beneath the morning breeze would sway.
Each careful footstep echoed through my heart,
Like every dream had learned to breathe at last.

Your eyes were bright with quiet, joyful tears.
Not born from sorrow, nor from yesterday.
But from the hope that finally became
A promise waiting just beyond your smile.

Your dress flowed softly like the morning clouds.
Each thread reflected sunlight from above.
No crown of jewels could outshine what I saw—
A peaceful heart completely wrapped in love.

The candles flickered gently by the aisle.
Their little flames refused to yield to wind.
They seemed to tell the story of our hearts:
Still burning softly through the passing years.

I watched the distance slowly disappear.
Each step became tomorrow drawing near.
The aisle no longer felt so long to cross;
It simply felt like coming safely home.

The choir sang with voices warm and clear.
The walls returned each note like whispered hope.
The whole church seemed to breathe with every hymn,
As if rejoicing with our answered prayers.

Outside, the morning waited patiently.
The trees bowed gently underneath the breeze.
Even the sunlight lingered at the doors,
Unwilling yet to miss your quiet joy.

I thought about the roads that brought us here.
The miles we crossed with nothing else but faith.
The countless prayers that traveled through the night,
Now blooming into something we could see.

There was no sound of rushing anywhere.
No need to hurry what was always meant.
The moment felt as timeless as the dawn,
A gift prepared before our names were known.

Your hands were calm although your heart was full.
Your smile carried a thousand silent dreams.
The little girl who wished for gentler days
Still lived within the woman standing there.

And in your eyes I saw no trace of fear.
Only a future opening its doors.
The weight of yesterday grew strangely small,
As hope became the language of your heart.

The bells awakened all the morning air.
Their joyful echoes wandered through the town.
They sounded less like metal touched by hands,
And more like heaven singing back to us.

The dream began to fade with morning light.
The music slowly drifted with the wind.
Yet somehow every color stayed with me,
Like promises too beautiful to lose.

I woke before the ending could arrive.
The church had vanished with the breaking dawn.
But one sweet picture never left my heart—
You walking gently toward tomorrow's light.

And if one day this dream should come to life,
I'll thank the Lord who heard our quiet prayers.
For long before we reached that sacred aisle,
He first was writing every step with love.`
  },
  {
    id: "8",
    type: "lsm",
    title: "Sarong Mensahe",
    englishTitle: "A message",
    poet: "Walt Whitman",
    moods: ["Devotion", "Joy", "Reflection"],
    year: "1860",
    text: `Namomotan kong madame,

Maugmang ikaduwang monthsary, sakuyang madame. ❤️

An duwang bulan tibaad halipot sana para sa iba, alagad para sakuya, sa duwang bulan na ini nangyari an pirang pinakamakabuluhan na aldaw kan sakong buhay. Kada aga na minamata ako na aram kong yaon ka sa buhay ko, garo baga saro na naman na sinimbag na pamibi. An lambang mensahe, lambang ngisi, lambang sadit na "padangat taka," lambang puyat na urulay, lambang simpleng update manungod sa aldaw mo—luhay-luhay ining nagin parte kan sakuyang pang-aroaldaw na kaugmahan.

Kun may maghapot sakuya kun ano an nagbago sa nakaaging duwang bulan, ini lang an sasabihon ko:

Nahanap ko idtong tawo na maninigo kong ibahan sa paggibo kan sakuyang aga.

Nagin urog ka pa sa sarong nobya para sakuya. Ika an nagin best friend ko, sakuyang ligtas na pailihan, paboritong kunsultahan nin magayagayang bareta, enot na naiisip sa gabos na nangyayari, asin an tawong ipinapamibi ko bago magturog.

Aram ko na dai nagin malumoy an buhay saimo.

Aram kong may mga aldaw na garo baga kun isay pa an mga dapat minatabang saimo na umuswag, iyo pa an nagpapasakit kan saimong inaagihan. May mga oras na an saimong mga pangarap, saimong pagklase, asin maski an talingkas mong pag-uswag, garo napupugulan nin mga sirkumstansyang dai mo man pinili. An paghiling kaini hali sa harayo nakakakulog, ta aram ko kun gano kadakula an potensyal mo.

Alagad nakikiulay ako, dai mo nanggad pagtugutan an mga oras na iyan na papaniwalon ka na an aga mo tapos na.

Bakong totoo iyan.

Nahiling ko an saimong kabuotan. Nahiling ko an saimong pasensya. Nahiling ko kun gano ka nagmamakulog sa mga tawo sa palibot mo. Nahiling ko kun pano ka padagos na namomoot, maski sa mga masakit na aldaw. Bako iyan tanda nin kaluyahan—iyan mga tanda nin pambihirang kusog.

Minsan minamawot ko na namidbid taka kuta kaidtong mga nakaaging taon.

Bako huli ta gusto kong baguhon kun isay ka ngunyan, kundi huli ta mawot kong yaon ako duman para ipagirumdom saimo, nin mas amay, na ika pirming sapat na. Mawot kong nagin saro ako sa mga boses na nagsasabi saimong padagos na magtubod sa saimong sadiri.

Asin minsan minamawot ko na an rayo kan Olongapo sa Legazpi mayo sana kuta.

May mga aldaw na an mawot ko lang iyo na makaiba ka—an idul-ong ka sa eskwelahan, ipag-ugma an saimong mga kapangganahan nin atubangan, kaputan an saimong kamot pag napapagal ka na, ipamibi ka nin magkaatubang, asin ipagirumdom saimo na an gabos magigin ayos lang.

Sa ngunyan, dai ako pirming yaon duman sa pisikal.

Alagad lugod namamatean mo na nungka taka man talagang binayaan sa saimong kataed.

Lambang mensaheng pinapadara ko, may darang kapidaso kan puso ko. Lambang pamibing hinuhutik ko, kaiba an saimong ngaran. Lambang planong ginigibo ko para sa aga, silensyong kaiba ka. Lambang pangarap na inaabot ko, bako na sana para sakuya—kundi para sa sato.

Sarong aldaw, mawot kong hilingon ta an mga masakit na kabanata na ini na may ngisi, bako huli ta nagin madali iyan, kundi huli ta dai kita nadaog kaiyan.

Pinapangaturugan ko an mga agang mamamata kita sa irarom kan sarong atop.

Pinapangaturugan kong magpuli pagkatapos nin trabaho asin madangog an boses mo imbes na maghalat nin notification.

Pinapangaturugan kong iselebrar an satong mga panggana na magkaibahan, rangaon an lambang saro sa oras nin kapalpakan, magluto na magkaiba, magngisi sa pinakasadit na bagay, maglingkod sa Diyos nin magkaibahan, asin maggurang na magkaibahan.

Pinapangaturugan kong mahiling ka na nakakamit an lambang pangarap na sinabi mo sakuya.

Pinapangaturugan kong mahiling ka na nabubuhay nin talingkas asin dai na pirming may hinahaditan.

Pinapangaturugan kong mahiling kang ngumingisi huli ta ika tunay nang matuninong.

An mga pangarap na iyan bakong ilusyon sana para sakuya.

Mga panuga iyan na andam kong pagtrabahuhan laog nin nagkapirang taon.

Mabalos ta ipinagkatiwala mo sakuya an saimong puso.

Mabalos ta pinipili mo ako aroaldaw.

Mabalos sa pagtubod sa sato, maski kun an buhay nagigin komplikado.

Mabalos sa pagpapagirumdom sakuya kun ano man nanggad an pagkamoot—bakong perpekto, kundi an pagpili sa lambang saro sa gabos na panahon.

May gusto man akong maaraman mo.

Dai mo nungka kaipuhan na magin "mas hababa" para sana magin komportable an ibang tawo.

Padagos mag-adal.

Padagos mangarap.

Padagos mag-uswag.

Padagos na magin an pambihirang babayi na linalang nin Diyos saimo.

Maski isay man an magduda saimo, maski isay man an pumugol saimo, asin maski gano kasakit an sitwasyon ngunyan, padagos akong matubod sa agang naghahalat saimo.

Ipag-oogma ko an lambang lakdang mo.

Mapalakpak ako sa lambang naabot mo.

Rarangahon taka sa lambang pagkadapa mo.

Padagos takang ipapamibi.

Padagos takang susuportaran.

Asin padagos takang padadangaton.

Bako lang sa mga pasil na aldaw.

Bako lang kun an gabos uyon sa plano.

Kundi urog na sa mga aldaw na kaipuhan mo nin tawong mapagirumdom saimo na ika mas makusog pa sa inaakala mo.

Namomotan ko, mabalos sa pagtao sakuya kan magayon na duwang bulan na ini.

Aram kong halaba pa an babagtason ta. Igwa nin mga pagbalo, rayo, obligasyon, asin mga oras na mas dakul an hinahagad kan buhay kisa sa gusto ta.

Alagad kun may sarong bagay man na naitukdo sakuya kan nakaaging duwang bulan, iyo ini:

Habo kong bagtason an dalan na iyan kaiba an iba.

Maugmang ikaduwang monthsary, sakuyang magayon asin makangangalas na madame.

Mabalos ta ika an sakong sinimbag na pamibi, sakong pinakadakulang biyaya, asin an babaying lalaoman kong pilion aroaldaw sa dakul pang taon na maabot.

Padangat taka urog pa kasuodma, asin padagos akong mahanap nin bagong rason para padangaton ka sa aga.

Daing sagkod saimo,

An saimong baby Adriaan. ❤️`,
    englishText: `My dearest madame,

Happy Second Monthsary, my madame. ❤️

Two months may seem small to everyone else, but to me, these two months have held some of the most meaningful days of my life. Every morning I wake up knowing you're in my life feels like another answered prayer. Every message, every laugh, every little "I love you," every late-night conversation, every random update about your day—they've quietly become part of my everyday happiness.

If someone asked me what changed these past two months, I'd simply say this:

I found someone worth building my future with.

You've become more than just my girlfriend. You've become my best friend, my safe place, my favorite person to tell good news to, my first thought whenever something happens, and the person I pray for before I sleep.

I know life hasn't been gentle with you.

I know there are days when it feels like the very people who should be helping you move forward instead make the road steeper. There are moments when your dreams, your education, and even your freedom to simply grow seem to be held back by circumstances you never chose. Watching that from afar hurts, because I know how much potential you have.

But please don't ever let those moments convince you that your future has been decided.

It hasn't.

I have seen your kindness. I have seen your patience. I have seen how deeply you care for the people around you. I have seen how you continue to love, even after difficult days. Those are not signs of weakness—they are signs of remarkable strength.

Sometimes I wish I had met you years earlier.

Not because I would change who you are today, but because I wish I could have been there to remind you, much sooner, that you have always been enough. I wish I could have been another voice telling you to keep believing in yourself.

And sometimes I wish the distance between Olongapo and Legazpi simply didn't exist.

There are days when all I want is to be beside you—to walk you to school, to celebrate your victories in person, to hold your hand when you're overwhelmed, to pray with you face to face, and to remind you that everything will be okay.

For now, I can't always be physically there.

But I hope you've felt that I've never truly left your side.

Every message I send carries a piece of my heart. Every prayer I whisper includes your name. Every plan I make for the future quietly includes you. Every goal I chase isn't just for me anymore—it's for us.

One day, I want us to look back at these difficult chapters and smile, not because they were easy, but because they didn't defeat us.

I dream of the mornings we'll wake up under the same roof.

I dream of coming home after work and hearing your voice instead of waiting for a notification.

I dream of celebrating our victories together, comforting one another through setbacks, cooking together, laughing over the smallest things, serving God together, and growing old together.

I dream of watching you achieve every goal you've told me about.

I dream of seeing you finally live without constantly looking over your shoulder.

I dream of seeing you smile because you're genuinely at peace.

Those dreams aren't just fantasies to me.

They're promises I'm willing to spend years working toward.

Thank you for trusting me with your heart.

Thank you for choosing me every single day.

Thank you for believing in us, even when life becomes complicated.

Thank you for reminding me what love actually looks like—not perfection, but choosing one another through every season.

I also want you to know something.

You never have to become "less" just to make other people comfortable.

Keep learning.

Keep dreaming.

Keep growing.

Keep becoming the incredible woman God created you to be.

No matter who doubts you, no matter who tries to limit you, and no matter how difficult today's circumstances feel, I'll keep believing in the future that waits for you.

I'll celebrate every step you take.

I'll cheer for every achievement.

I'll comfort you through every setback.

I'll keep praying for you.

I'll keep supporting you.

And I'll keep loving you.

Not only during the easy days.

Not only when everything is going according to plan.

But especially on the days when you need someone to remind you that you're stronger than you think.

My love, thank you for giving me these wonderful two months.

I know we've still got a long road ahead of us. There will be challenges, distance, responsibilities, and moments when life asks more from us than we'd like.

But if there's one thing these past two months have taught me, it's this:

I don't want to walk that road with anyone else.

Happy Second Monthsary, my beautiful and gorgeous madame.

Thank you for being my answered prayer, my greatest blessing, and the woman I hope to keep choosing every single day for many years to come.

I love you more than yesterday, and I'll keep finding new reasons to love you tomorrow.

Forever yours,

Your baby Adriaan. ❤️`
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
    durationLabel: "2:51",
  },
  {
    id: "10",
    type: "voicemail",
    title: "From Strangers to Us",
    englishTitle: "From Strangers to Us",
    poet: "Adriaan M. Dimate | BSCS 4-A (original composition)",
    moods: ["Devotion", "Longing", "Joy"],
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
