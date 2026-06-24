export type Mood = "Longing" | "Devotion" | "Passion" | "Joy" | "Farewell" | "Reflection";

export interface Poem {
  id: string;
  title: string;
  poet: string;
  text: string;
  englishText?: string;
  moods: Mood[];
  year?: string;
}

// all poems here are currently just temporary.
// deal with me for now.
// all 9 will be in Bikol.

export const poems: Poem[] = [
  // poem 1
  {
    id: "1",
    title: "Tesis Pasiring Satoya",
    poet: "Adriaan M. Dimate | BSCS 4-A",
    moods: ["Devotion", "Joy"],
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
    title: "Tonight I Can Write The Saddest Lines",
    poet: "Pablo Neruda",
    moods: ["Farewell", "Longing", "Reflection"],
    year: "1924",
    text: `[Bikolano translation for Tonight I Can Write The Saddest Lines goes here]`,
    englishText: `Tonight I can write the saddest lines.

Write, for example, 'The night is shattered
and the blue stars shiver in the distance.'

The night wind revolves in the sky and sings.

Tonight I can write the saddest lines.
I loved her, and sometimes she loved me too.

Through nights like this one I held her in my arms.
I kissed her again and again under the endless sky.

She loved me, sometimes I loved her too.
How could one not have loved her great still eyes.

Tonight I can write the saddest lines.
To think that I do not have her. To feel that I have lost her.

To hear the immense night, still more immense without her.
And the verse falls to the soul like dew to the pasture.

What does it matter that my love could not keep her.
The night is shattered and she is not with me.`
  },
  {
    id: "3",
    title: "How Do I Love Thee? (Sonnet 43)",
    poet: "Elizabeth Barrett Browning",
    moods: ["Devotion", "Passion"],
    year: "1850",
    text: `[Bikolano translation for Sonnet 43 goes here]`,
    englishText: `How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
My soul can reach, when feeling out of sight
For the ends of being and ideal grace.
I love thee to the level of every day's
Most quiet need, by sun and candle-light.
I love thee freely, as men strive for right;
I love thee purely, as they turn from praise.
I love thee with the passion put to use
In my old griefs, and with my childhood's faith.
I love thee with a love I seemed to lose
With my lost saints. I love thee with the breath,
Smiles, tears, of all my life; and, if God choose,
I shall but love thee better after death.`
  },
  {
    id: "4",
    title: "She Walks in Beauty",
    poet: "Lord Byron",
    moods: ["Devotion", "Reflection"],
    year: "1815",
    text: `[Bikolano translation for She Walks in Beauty goes here]`,
    englishText: `She walks in beauty, like the night
Of cloudless climes and starry skies;
And all that's best of dark and bright
Meet in her aspect and her eyes;
Thus mellowed to that tender light
Which heaven to gaudy day denies.

One shade the more, one ray the less,
Had half impaired the nameless grace
Which waves in every raven tress,
Or softly lightens o'er her face;
Where thoughts serenely sweet express,
How pure, how dear their dwelling-place.

And on that cheek, and o'er that brow,
So soft, so calm, yet eloquent,
The smiles that win, the tints that glow,
But tell of days in goodness spent,
A mind at peace with all below,
A heart whose love is innocent!`
  },
  {
    id: "5",
    title: "Bright Star",
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
    title: "He Wishes for the Cloths of Heaven",
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
    title: "Love's Philosophy",
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
    title: "A Glimpse",
    poet: "Walt Whitman",
    moods: ["Joy", "Reflection"],
    year: "1860",
    text: `[Bikolano translation for A Glimpse goes here]`,
    englishText: `A glimpse through an interstice caught,
Of a crowd of workmen and drivers in a bar-room around the stove late of a winter night, and I unremark'd seated in a corner,
Of a youth who loves me and whom I love, silently approaching and seating himself near, that he may hold me by the hand,
A long while amid the noises of coming and going, of drinking and oath and smutty jest,
There we two, content, happy in being together, speaking little, perhaps not a word.`
  }
];
