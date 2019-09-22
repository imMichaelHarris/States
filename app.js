
const states = [
    {
        'name': 'California',
        'nickname': 'The Golden State',
        'population': '39,557,045',
        'info': `The first Spanish missionaries arrived in California 
        in the 1700s, but California didn’t become a U.S. 
        territory until 1847, as part of the treaty ending the 
        Mexican-American War. Shortly thereafter, the discovery of gold at 
        Sutter’s Mill in 1848 inspired a wave of settlers to head to the west 
        coast in search of fortune. In 1850 California became the 31st state, 
        and is now the third largest state behind Alaska and Texas. With 
        millions of acres of farmland, California leads the U.S. 
        in agricultural production. The state is also home to famous 
        cultural institutions and national parks including: Hollywood, 
        Disneyland, Yosemite National Park, Alcatraz, Angel Island and 
        the Golden Gate Bridge.`,
        'image': `url('img/california.jpeg')`,
        'outline' : 'state-outlines/CA.png',
        'learn-more': 'http://www.visitcalifornia.com/'
    },
    {
        'name': 'Arizona',
        'nickname': 'The Grand Canyon State',
        'population': '7,171,646',
        'info': `Arizona state has 18 national monuments, more than any other state in the Unites States Arizona 
        is one of the only two states that does not observe Daylight Savings time (Hawaii is the other). 
        Arizona is one of the states that form the Four Corners, the only location in the United States where four states 
        intersect at one point. The other three states are Colorado, New Mexico, and Utah. In Arizona, it is illegal for donkeys to sleep in bathtubs. 
        Southern Arizona is known for its desert climate, with very hot summers and mild winters. Northern Arizona features 
        forests of pine, Douglas fir, and spruce trees; the Colorado Plateau; some mountain ranges About one-quarter of the 
        state is made up of Indian reservations that serve as the home of 27 federally recognized 
        Native American tribes, including the Navajo Nation, the largest in the state and the United States, with more than 300,000 citizens.` ,
        'image': `url('img/arizona.jpg')`,
        'outline' : 'state-outlines/Arizona.png',
        'learn-more': 'https://www.visitarizona.com/'
    },
    {
        'name': 'Florida',
        'nickname': 'The Sushine State',
        'population': '21,299,325',
        'info': `Florida, which joined the union as the 27th state in 1845, is nicknamed the Sunshine State and known for its balmy climate and natural beauty. Spanish explorer Juan Ponce de Leon, who led the first European expedition to Florida in 1513, named the state in tribute to Spain’s Easter celebration known as “Pascua Florida,” or Feast of Flowers. During the first half of the 1800s, U.S. troops waged war with the region’s Native American population. During the Civil War, Florida was the third state to secede from the Union. Beginning in the late 19th century, residents of Northern states flocked to Florida to escape harsh winters. In the 20th century, tourism became Florida’s leading industry and remains so today, attracting millions of visitors annually. Florida is also known for its oranges and grapefruit, and some 80 percent of America’s citrus is grown there.`,
        'image': `url('img/florida.jpg')`,
        'outline' : 'state-outlines/Florida.png',
        'learn-more': 'https://www.visitflorida.com/en-us.html'
    }, 
    {
        'name': 'Hawaii',
        'nickname': 'The Aloha State',
        'population': '1,420,491',
        'info': `The state encompasses nearly the entire volcanic Hawaiian archipelago, which comprises hundreds of islands spread over 1,500 miles (2,400 km). At the southeastern end of the archipelago, the eight main 
        islands are—in order from northwest to southeast: Niʻihau, Kauaʻi, Oʻahu, Molokaʻi, Lānaʻi, Kahoʻolawe, Maui, and the Island of Hawaiʻi. The last is the largest island in the group; it is often called the 
        "Big Island" or "Hawaiʻi Island" to avoid confusion with the state or archipelago. The archipelago is physiographically and ethnologically part of the Polynesian subregion of Oceania.
        Hawaii's diverse natural scenery, warm tropical climate, abundance of public beaches, oceanic surroundings, and active volcanoes make it a popular destination for tourists, surfers, biologists, 
        and volcanologists. Because of its central location in the Pacific and 19th-century labor migration, Hawaii's culture is strongly influenced by North American and East Asian cultures, in addition to 
        its indigenous Hawaiian culture. Hawaii has over a million permanent residents, along with many visitors and U.S. military personnel. Its capital is Honolulu on the island of Oʻahu.`,
        'image': `url('img/hawaii.jpg')`,
        'outline' : "state-outlines/hawaii.png",
        'learn-more': 'https://www.gohawaii.com/'
    },
    {
        'name': 'Colorado',
        'nickname': 'The Centennial State',
        'population': '5,695,564',
        'info': `TColorado, which joined the union as the 38th state in 1876, is America’s eighth largest state in terms of land mass. Located in the Rocky Mountain region of the western United States, the state’s abundant and varied natural resources attracted the ancient Pueblo peoples and, later, the Plains Indians. First explored by Europeans in the late 1500s (the Spanish referred to the region as “Colorado” for its red-colored earth), the area was ceded to the United States in 1848 with the Treaty of Guadalupe Hidalgo that ended the Mexican-American War (1846-48). In 1858, the discovery of gold in Colorado attracted new settlers. During the Plains Indian Wars (1860s-80s), Colorado’s wild frontier was the scene of intense fighting between Native Americans and white settlers. In the 21st century, Colorado continues to rely on its natural resources as well as agriculture and tourism to sustain its economy.`,
        'image': `url('img/colorado.jpg')`,
        'outline' : "state-outlines/colorado.png",

        'learn-more': 'https://www.colorado.com/'
    },
    {
        'name': 'New York',
        'nickname': 'The Empire State',
        'population': '19,542,209',
        'info': `New York is a state in the northeastern United States. New York was one of the original Thirteen Colonies that formed the United States. With an estimated 19.85 million residents in 2017,[4] it is the fourth most populous state. To differentiate from its city with the same name, it is sometimes called New York State.

        The state's most populous city, New York City, makes up over 40% of the state's population. Two-thirds of the state's population lives in the New York metropolitan area, and nearly 40% lives on Long Island.[9] The state and city were both named for the 17th century Duke of York, the future King James II of England. With an estimated population of 8.55 million in 2015,[9] New York City is the most populous city in the United States and the premier gateway for legal immigration to the United States.[10][11][12] The New York metropolitan area is one of the most populous in the world.[13][14] New York City is a global city,[15] home to the United Nations Headquarters[16] and has been described as the cultural, financial and media capital[17][18] of the world,[19][20][21] as well as the world's most economically powerful city.[22][21][23] The next four most populous cities in the state are Buffalo, Rochester, Yonkers, and Syracuse, while the state capital is Albany.`,
        'image': `url('img/newyorknight.jpg')`,
        'outline' : "state-outlines/new-york.jpg",

        'learn-more': 'https://www.nycgo.com/'
    }, 
    {
        'name': 'Alabama',
        'nickname': 'The Heart of Dixie',
        'population': '4,887,871',
        'info': 'Alabama, which joined the union as the 22nd state in 1819, is located in the southern United States and nicknamed the “Heart of Dixie.” The region that became Alabama was occupied by American Indians as early as some 10,000 years ago. Europeans reached the area in the 16th century. During the first half of the 19th century, cotton and slave labor were central to Alabama’s economy. The state played a key role in the American Civil War; its capital, Montgomery, was the Confederacy’s first capital. Following the war, segregation of blacks and whites prevailed throughout much of the South. In the mid-20th century, Alabama was at the center of the American Civil Rights Movement and home to such pivotal events as the Montgomery Bus Boycott. In the early 21st century, the state’s economy was fueled in part by jobs in aerospace, agriculture, auto production and the service sector.',
        'image': `url('img/alabama.jpg')`,
        'outline' : "state-outlines/alabama.png",

        'learn-more': 'https://alabama.travel/' 
    },
    {
        'name': 'Alaska',
        'nickname': 'The Last Frontier',
        'population': '737,438',
        'info': 'The largest state (in area) of the United States, Alaska was admitted to the union as the 49th state in 1959, and lies at the extreme northwest of the North American continent. Acquired by the United States in 1867, the territory was dubbed “Seward’s Folly” after U.S. Secretary of State William Seward, who arranged to purchase the land from Russia. Critics of the purchase believed that the land had nothing to offer, but the discovery of gold in the 1890s created a stampede of prospectors and settlers. Alaska is bounded by the Beaufort Sea and the Arctic Ocean to the north; Canada’s Yukon Territory and British Columbia province to the east; the Gulf of Alaska and the Pacific Ocean to the south; the Bering Strait and the Bering Sea to the west; and the Chukchi Sea to the northwest. The capital is Juneau.',
        'image': `url('img/alaska.jpg')`,
        'outline' : "state-outlines/alaska.png",

        'learn-more': 'https://www.travelalaska.com/' 
    },
    {
        'name': 'Arkansas',
        'nickname': 'The Natural State',
        'population': '3,013,825',
        'info': 'Part of the land acquired in the Louisiana Purchase, Arkansas became a separate territory in 1819 and achieved statehood in 1836. A slave state, Arkansas became the ninth state to secede from the union and join the Confederate States of America. Today Arkansas ranks 27th among the 50 states in area, but, except for Louisiana and Hawaii, it is the smallest state west of the Mississippi River. Its neighbors are Missouri to the north, Tennessee and Mississippi to the east, Louisiana to the south, Texas to the southwest and Oklahoma to the west. The name Arkansas was used by the early French explorers to refer to the Quapaw people—a prominent indigenous group in the area—and to the river along which they settled. The term was likely a corruption of akansea, the word applied to the Quapaw by another local indigenous community, the Illinois. Little Rock, the state capital, is located in the central part of the state. In 1957, Little Rock Central High School became the focus of national attention when federal troops were deployed to the campus to enforce integration.',
        'image': `url('img/arkansas.jpg')`,
        'outline' : "state-outlines/arkansas.png",

        'learn-more': 'https://www.arkansas.com/' 
    },
    {
        'name': 'Connecticut',
        'nickname': 'The Constitution State',
        'population': '3,572,665',
        'info': 'One of the original 13 colonies and one of the six New England states, Connecticut is located in the northeastern corner of the country. Initially an agricultural community, by the mid-19th century textile and machine manufacturing had become the dominant industries. The home of Eli Whitney and Samuel Colt, Connecticut was a leading manufacturer of guns and other arms. Today Connecticut lies in the midst of the great urban-industrial complex along the Atlantic coast, bordering Massachusetts to the north, Rhode Island to the east, Long Island Sound to the south and New York to the west. Hartford, in the north-central part of the state, is the capital. The state is roughly rectangular in shape, with a panhandle extending to the southwest on the New York border. In area it is the third smallest U.S. state, but it ranks among the most densely populated. The state’s greatest east-west length is about 110 miles, and its maximum north-south extent is about 70 miles. Connecticut takes its name from an Algonquian word meaning “land on the long tidal river.” “Nutmeg State,” “Constitution State” and “Land of Steady Habits” are all nicknames that have been applied to Connecticut. ',
        'image': `url('img/connecticut.jpg')`,
        'outline' : "state-outlines/connecticut.png",

        'learn-more': 'http://www.ctvisit.com/' 
    },
    {
        'name': 'Delaware',
        'nickname': 'The First State',
        'population': '967,171',
        'info': 'The first of the original 13 states to ratify the federal Constitution, Delaware occupies a small niche in the Boston–Washington, D.C., urban corridor along the Middle Atlantic seaboard. It is the second smallest state in the country and one of the most densely populated. The state is organized into three counties—from north to south, New Castle, Kent and Sussex—all established by 1682. Its population, like its industry, is concentrated in the north, around Wilmington, where the major coastal highways and railways pass through from Pennsylvania and New Jersey on the north and east into Maryland on the south and west. The rest of the state comprises the northeastern corner of the Delmarva Peninsula, which Delaware shares with Maryland and Virginia (hence its name). Most state government operations are located in Dover, the capital.',
        'image': `url('img/delaware.jpg')`,
        'outline' : "state-outlines/delaware.png",

        'learn-more': 'https://www.visitdelaware.com/' 
    },
    {
        'name': 'Georgia',
        'nickname': 'Empire State of the South',
        'population': '10,519,475',
        'info': 'The largest of the U.S. states east of the Mississippi River and the youngest of the 13 former English colonies, Georgia was founded in 1732, at which time its boundaries were even larger—including much of the present-day states of Alabama and Mississippi. By the mid-19th century, Georgia had the greatest number of plantations of any state in the South, and in many respects epitomized plantation culture and economic dependence on slavery. In 1864, Union General William Tecumseh Sherman invaded Georgia, captured Atlanta and began his infamous March to the Sea,cutting a 200-mile-wide swath of fire and destruction reaching all the way to Savannah. Georgia’s landscapevaries greatly as it sweeps from the Appalachian Mountains in the northto the marshes of the Atlantic coast on the southeast tothe Okefenokee Swamp on the south.',
        'image': `url('img/georgia.jpg')`,
        'outline' : "state-outlines/georgia.png",

        'learn-more': 'http://www.exploregeorgia.org/' 
    },
    {
        'name': 'Idaho',
        'nickname': 'The Gem State',
        'population': '1,754,208',
        'info': 'Bordered by the Canadian province of British Columbia to the north and the U.S. states of Montana and Wyoming to the east, Utah and Nevada to the south, and Oregon and Washington to the west, Idaho is twice as large as the six New England states combined. With an abundance of scenic mountains, lakes, rivers and outdoor attractions, the state draws more than 20 million tourists eachyear. Idaho produces more potatoes and trout than any other state in the nation, and is known as the “Gem State” for the 72 types of precious and semi-precious stones it produces—some of which are exclusive to the state. Its state capital, Boise, is also its largest city with more than 200,000 residents.',
        'image': `url('img/idaho.jpg')`,
        'outline' : "state-outlines/idaho.png",

        'learn-more': 'https://visitidaho.org/' 
    },
    {
        'name': 'Illinois',
        'nickname': 'Land of Lincoln',
        'population': '12,741,080',
        'info': 'The first Europeans to visit Illinois were the French explorers Louis Jolliet and Jacques Marquette in 1673, but the region was ceded to Britain after the French and Indian War. After the American Revolution, Illinois became a territory of the United States, and achieved statehood in 1818. Located on Lake Michigan, and connected to the eastern ports via the Erie Canal, Chicago became a booming metropolis, and even the fire of 1871 could not stunt its growth. In the second half of the 19th century the great need for workers in the mills, rail yards and slaughterhouses made Chicago a popular destination for immigrants and freed blacks. During Prohibition Chicago became synonymous with bootleg liquor and gangsters like Al Capone.        ',
        'image': `url('img/illinois.jpg')`,
        'outline' : "state-outlines/illinois.png",

        'learn-more': 'https://www.enjoyillinois.com/' 
    },
    {
        'name': 'Indiana',
        'nickname': 'The Hoosier State',
        'population': '6,691,878',
        'info': 'Indiana sits, as its motto claims, at “the crossroads of America.” It borders Lake Michigan and the state of Michigan to the north, Ohio to the east, Kentucky to the south, and Illinois to the west, making it an integral part of the American Midwest. Except for Hawaii, Indiana is the smallest state west of the Appalachian Mountains. After the American Revolution the lands of Indiana were open to U.S. settlers. The influx of white immigrants brought increased war with the Native American tribes. The conflicts continued until the 1811 Battle of Tippecanoe, which was won by General, and future president, William Henry Harrison. With a name that is generally thought to mean “land of the Indians,” Indiana was admitted on Dec. 11, 1816, as the 19th state of the union. Its capital has been at Indianapolis since 1825.        ',
        'image': `url('img/indiana.jpg')`,
        'outline' : "state-outlines/indiana.png",

        'learn-more': 'https://visitindiana.com/' 
    },
    {
        'name': 'Iowa',
        'nickname': 'The Hawkeye State',
        'population': '3,156,145',
        'info': 'Iowa was admitted to the union as the 29th state on Dec. 28, 1846. As a Midwestern state, Iowa forms a bridge between the forests of the east and the grasslands of the high prairie plains to the west. Its gently rolling landscape rises slowly as it extends westward from the Mississippi River, which forms its entire eastern border. The Missouri River and its tributary, the Big Sioux, form the western border, making Iowa the only U.S. state that has two parallel rivers defining its borders. Iowa is bounded by the states of Minnesota to the north, Wisconsin and Illinois to the east, Missouri to the south, and Nebraska and South Dakota to the west. Des Moines, in the south-central part of the state, is the capital. The state name is derived from the Iowa Native American people who once inhabited the area.        ',
        'image': `url('img/Iowa.jpeg')`,
        'outline' : "state-outlines/iowa.png",

        'learn-more': 'https://www.traveliowa.com/' 
    },
    {
        'name': 'Kansas',
        'nickname': 'The Sunflower State',
        'population': '2,911,505',
        'info': 'Kansas, situated on the American Great Plains, became the 34th state on January 29, 1861. Its path to statehood was long and bloody: After the Kansas-Nebraska Act of 1854 opened the two territories to settlement and allowed the new settlers to determine whether the states would be admitted to the union as “free” or”slave,” North and South competed to send the most settlers into the region. This quickly led to violence,and the territory became known as “Bleeding Kansas.” Kansas has long been known as part of America’s agricultural heartland, and is home to the major U.S. military installation Fort Leavenworth. In 1954, it became a battleground of the civil rights movement when the landmark Brown v. Board of Education of Topeka case was decided in the Supreme Court, ending the doctrine of “separate but equal” in public schools. Kansas is also known for its contributions to jazz music, barbecue and as the setting of L. Frank Baum’s classic children’s book The Wizard of Oz.        ',
        'image': `url('img/kansas.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.travelks.com/' 
    },
    {
        'name': 'Kentucky',
        'nickname': 'The Bluegrass State',
        'population': '4,468,402',
        'info': 'Kentucky was granted statehood in 1792, becomingthe first U.S. state west of the Appalachian Mountains. Frontiersman Daniel Boone was one of Kentucky’s most prominent explorers and many immigrants followed the trail he blazed through the Cumberland Gap, known as the Wilderness Road. Although it sided with the Confederacy during the Civil War, the population was deeply divided, and many Kentucky residents fought for the North. Known primarily as an agricultural area into the 20th century, Kentucky is also a major U.S. coal producer andsite of the U.S.military bases Fort Knox and Fort Campbell. It is also known as the home of the legendary Kentucky Derby horse race and bluegrass music, pioneered by Kentucky native Bill Monroe.',
        'image': `url('img/kentucky.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.kentuckytourism.com/' 
    },
    {
        'name': 'Louisiana',
        'nickname': 'The Bayou State',
        'population': '4,659,978',
        'info': 'Louisiana sits above the Gulf of Mexico at the mouth of the Mississippi River, bordered by Arkansas to the north, Mississippi to the east and Texas to the west. Originally colonized by the French during the 18th century, it became U.S. territory as part of the historic Louisiana Purchase in 1803, and was admitted to the union in 1812. Louisiana’s capital city is Baton Rouge. It is also home to the historic port city New Orleans, which is famous for its unique cuisine, jazz and spectacular Mardi Gras festival.',
        'image': `url('img/louisiana.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.louisianatravel.com/' 
    },
    {
        'name': 'Maine',
        'nickname': 'The Pine Tree State',
        'population': '1,338,404',
        'info': 'Maine, the largest of the six New England states, lies at the northeastern corner of the country. Maine became the 23rd state on March 15, 1820, as part of the Missouri Compromise, which allowed Missouri to enter the union as a slave state and Maine as a free state. Maine is boundedby the Canadian provinces of Quebec and New Brunswick, and by New Hampshire. Maine is famous for its rocky coastline, and is the leading U.S. producer of lobsters and blueberries.',
        'image': `url('img/maine.jpg')`,
        'outline' : "",

        'learn-more': 'https://visitmaine.com/' 
    },
    {
        'name': 'Maryland',
        'nickname': 'The Old Line State',
        'population': '6,042,718',
        'info': 'One of the original 13 colonies, Maryland lies at the center of the Eastern Seaboard, amid the great commercial and population complex that stretches from Maine to Virginia. Its small size belies the great diversity of its landscapes and ways of life that they foster, from the low-lying and water-oriented Eastern Shore and Chesapeake Bay area, through the metropolitan Baltimore, its largest city, to the forested Appalachian foothills and mountains of its western reaches. Annapolis, the state capital, is also home to the United States Naval Academy. Maryland is the leading producer of blue crabs and is renowned for its crab cakes.',
        'image': `url('img/maryland.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.visitmaryland.org/' 
    },
    {
        'name': 'Massachusetts',
        'nickname': 'The Bay State',
        'population': '6,902,149',
        'info': 'One of the original 13 colonies and one of the six New England states, Massachusetts (officially called a commonwealth) is known for being the landing place of the Mayflower and the Pilgrims. English explorer and colonist John Smith named the state for the Massachuset tribe. Boston, the state capital, was a hotbed of activity, including the Boston Massacre and the Boston Tea Party, during the American Revolution. In addition to its revolutionary spirit, the state is known for sparking the American Industrial Revolution with the growth of textile mills in Lowell, and for its large Irish-American population.',
        'image': `url('img/massachusetts.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.massvacation.com/' 
    },
    {
        'name': 'Michigan',
        'nickname': 'The Wolverine State',
        'population': '9,998,915',
        'info': 'Michigan, the Wolverine State, joined the union in 1837. Located in the center of the Great Lakes, Michigan is divided into two land masses known as the Upper and Lower Peninsulas. The Mackinac Bridge, which connects Michigan’s upper peninsula to the rest of the state, spans five miles and is one of the world’s longest suspension bridges. Detroit, the state’s largest city, is the home of the American auto industry and is the birthplace of Motown Records.',
        'image': `url('img/michigan.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.michigan.org/' 
    },
    {
        'name': 'Minnesota',
        'nickname': 'The North Star State',
        'population': '5,611,179',
        'info': 'Minnesota became the 32nd state of the union on May 11, 1858. A small extension of the northern boundary makes it the most northerly of the 48 conterminous U.S. states. (This peculiar protrusion is the result of a boundary agreement with Great Britain before the area had been carefully surveyed.) Minnesota is bounded by the Canadian provinces of Manitoba and Ontario to the north, by Lake Superior and Wisconsin to the east, by Iowa to the south and South Dakota and North Dakota to the west. Minnesota is the home of the Mall of America, which holds more than 400 stores and attracts nearly 40 million people a year.',
        'image': `url('img/minnesota.jpg')`,
        'outline' : "",

        'learn-more': 'http://www.exploreminnesota.com/index.aspx' 
    },
    {
        'name': 'Mississippi',
        'nickname': 'The Magnolia State',
        'population': '2,986,530',
        'info': 'Mississippi joined the Union as the 20th state in 1817 and gets its name from the Mississippi River, which forms its western border. Early inhabitants of the area that became Mississippi included the Choctaw, Natchez and Chickasaw. Spanish explorers arrived in the region in 1540 but it was the French who established the first permanent settlement in present-day Mississippi in 1699. During the first half of the 19th century, Mississippi was the top cotton producer in the United States, and owners of large plantations depended on the labor of black slaves. Mississippi seceded from the Union in 1861 and suffered greatly during the American Civil War. Despite the abolition of slavery, racial discrimination endured in Mississippi, and the state was a battleground of the Civil Rights Movement in the mid-20th century. In the early 21st century, Mississippi ranked among America’s poorest states.',
        'image': `url('img/mississippi.jpg')`,
        'outline' : "",

        'learn-more': 'http://visitmississippi.org/' 
    },
    {
        'name': 'Missouri',
        'nickname': 'The Show-Me State',
        'population': '6,126,452',
        'info': 'Missouri, the Show Me State, was admitted to the United States in 1821 as part of the Missouri Compromise. Located on the Mississippi and Missouri Rivers, the state was an important hub of transportation and commerce in early America, and the Gateway Arch in St. Louis is a monument to Missouri’s role as the “Gateway to the West.” St. Louis, Missouri, is home to the Anheuser-Busch, the maker of Budweiser beer, and boasts the largest beer-producing plant in the country.',
        'image': `url('img/missouri.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.visitmo.com/' 
    },
    {
        'name': 'Montana',
        'nickname': 'The Treasure State',
        'population': '1,062,305',
        'info': 'Montana is the fourth largest U.S. state by area, behind Alaska, Texas and California, but with an average of just six people per square mile, it is one of the country’s least densely populated states. Although the name Montana is derived from the Spanish montaña (“mountain” or “mountainous region”), it has an average elevation of only 3,400 feet, the lowest among the Rocky Mountain states. Montana is home to the Little Bighorn Battlefield National Monument, which memorializes the historic 1876 battle between the Sioux tribe and U.S. Army, often referred to as “Custer’s Last Stand.” Yellowstone National Park, located in southern Montana and northern Wyoming, was the first national park established in the United States.',
        'image': `url('img/montana.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.visitmt.com/' 
    },
    {
        'name': 'Nebraska',
        'nickname': 'Cornhusker State',
        'population': '1,929,268',
        'info': 'Nebraska, which was admitted to the union as the 37th state on March 1, 1867, two years after the end of the American Civil War, contains some of the nation’s best ranchland and farmland. Prior to its statehood, the Nebraska Territory had been sparsely settled but saw growth during the California Gold Rush in 1848, with a larger wave of settlers arriving as homesteaders in the 1860s. Although the territorial capital of Nebraska was Omaha, when it achieved statehood the seat of government was moved to Lancaster, which was later renamed Lincoln after President Abraham Lincoln, who had recently been assassinated. Nebraska is bounded by South Dakota to the north, Colorado to the South, Wyoming to the West and Iowa and Missouri to the East.',
        'image': `url('img/nebraska.jpg')`,
        'outline' : "",

        'learn-more': 'https://visitnebraska.com/' 
    },
    {
        'name': 'Nevada',
        'nickname': 'Silver State',
        'population': '3,034,392',
        'info': 'Nevada is the seventh largest of the 50 states, but is one of the most sparsely populated. Carson City, in the western part of the state, is the capital. Gambling is legal in Nevada, and Las Vegas, the state’s largest city, is known internationally for its opulent casinos and as an entertainment destination. Nevada is also home to the Hoover Dam, which wasthe single largest public works project in the history of the United States, and Lake Mead, the largest reservoir in the country.',
        'image': `url('img/nevada.jpg')`,
        'outline' : "",

        'learn-more': 'https://travelnevada.com/' 
    },
    {
        'name': 'New Hampshire',
        'nickname': 'The Granite State',
        'population': '1,356,458',
        'info': 'New Hampshire, one of the original 13 colonies, was the first state to have its own state constitution. Its spirit of independence is epitomized in the state motto–“Live Free or Die.” New Hampshire was the 9th state to ratify the U.S. Constitution–the final state needed to put the document into effect. It plays an important role in national elections, as it is the first state to holdnational primaries, and its primary results are thought to influence those in the rest of the nation, giving rise to the saying “As New Hampshire goes, so goes the nation.” It is the site of the White Mountains and the famed Mount Washington, one of the windiest places in the nation.',
        'image': `url('img/new-hampshire.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.visitnh.gov/' 
    },
    {
        'name': 'New Jersey',
        'nickname': 'The Garden State',
        'population': '9,032,873',
        'info': 'One of the original 13 colonies, New Jersey was an important battleground during the American Revolution. Located in the heart of the bustling Atlantic corridor and nestled between New York and Pennsylvania, New Jersey has the highest population density of any U.S. state. New Jersey was named for the island of Jersey in the English Channel. Its long and beautiful coastline has long made New Jersey a popular vacation destination, with over 50 seaside resort towns including Asbury Park, Atlantic City and Cape May. The state also boasts an impressive musical legacy–Bruce Springsteen, Jon Bon Jovi and Frank Sinatra all hail from New Jersey. It is known as industrial center, but earns its “Garden State” nickname–New Jersey is a leading producer of cranberries, blueberries and tomatoes.',
        'image': `url('img/new-jersey.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.visitnj.org/' 
    },
    {
        'name': 'New Mexico',
        'nickname': 'Land of Enchantment',
        'population': '2,095,428',
        'info': 'Colonized by Spain, the land that is now New Mexico became U.S. territory as part oft he Gadsen Purchase in 1853, though New Mexico did not become a U.S. state until 1912. During World War II, New Mexico was the site of the top-secret Manhattan Project, in which top U.S. scientists raced to create the first atomic bomb, which was tested at the Trinity Bomb site, near Alamagordo, on July 16, 1945. In 1947, Roswell, New Mexico, became a topic of speculation about extraterrestrial life when a local farmer discovered unidentified debris on his property, which some believed was the remains of a crashed alien spacecraft. Visitors to New Mexico frequent attractions like the Very Large Array telescope in Socorro and the historic city of Santa Fe, which artist Georgia O’Keeffe famously called home.',
        'image': `url('img/new-mexico.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.newmexico.org/' 
    },
    {
        'name': 'North Carolina',
        'nickname': 'Tar Heel State',
        'population': '10,383,620',
        'info': 'One of the original 13 colonies, North Carolina was the first state to instruct its delegates to vote for independence from the British crown during the Continental Congress. Following the Revolutionary War, North Carolina developed an extensive slave plantation system and became a major exporter of cotton and tobacco, although the slave population remained relatively small compared to that of other southern states. In 1861, North Carolina became one of 11 states to secede from the United States, beginning the American Civil War. Despite no major battles being fought in the state, North Carolina sent more recruits to fight for the Confederacy than any other rebel state. In 1903, the state became the site of the first manned self-propelled airplane flight when the Wright brothers took off from a cliff near Kitty Hawk.',
        'image': `url('img/north-carolina.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.visitnc.com/' 
    },
    {
        'name': 'North Dakota',
        'nickname': 'The Peace Garden State',
        'population': '760,077',
        'info': 'The land that today makes up North Dakota became U.S.territory as part of the Louisiana Purchaseof 1803.The regionwas originally part of the Minnesota and Nebraska territories, until, along with South Dakota, it was organized into the Dakota Territory in 1861. The state was very sparsely populated until the arrival of the railroads in the late 1800s, andfinally becamea state in 1889. During the run-up to statehood, there was an intense rivalry between North and South Dakota over which state would be admitted to the unionfirst. When the time came for their formal admission, President Benjamin Harrison selected at random which bill to sign first, and did not record the order in which the bills were signed, though North Dakota is traditionally listed first. The state is renowned for its scenic “badlands,” which are part of the Theodore Roosevelt National Park.',
        'image': `url('img/north-dakota.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.ndtourism.com/' 
    },
    {
        'name': 'Ohio',
        'nickname': 'The Buckeye State',
        'population': '11,689,442',
        'info': 'Initially colonized by French fur traders, Ohio became a British colonial possession following the French and Indian War in 1754. At the end of the American Revolution, Britain ceded control of the territory to the newly formed United States, which incorporated it into the Northwest Territory. Ohio became a state on March 1, 1803, although no formal declaration was madeuntil 1953, when President Dwight Eisenhower officially signed the documents making it a state, retroactive to the original date.Ohio issometimes called the “Mother of Modern Presidents,” having sent seven Ohioans (both natives and residents)to the White House since 1869. Ohio is also known as the home of the Rock and Roll Hall of Fame in Cleveland, the NationalUnderground RailroadFreedom Centerin Cincinnati and National Football League Hall of Fame in Canton.',
        'image': `url('img/ohio.jpg')`,
        'outline' : "",

        'learn-more': 'http://www.ohio.org/' 
    },    {
        'name': 'Oklahoma',
        'nickname': 'The Sooner State',
        'population': '3,943,079',
        'info': 'The land that today makes up Oklahoma was added to the United States as part of the Louisiana Purchase of 1803. Throughout the 19th century, the U.S. governmentrelocated Indian tribes from the southeastern United Statesto the area, and by 1900, over 30 Indian tribes had beenmoved to what was originally calledthe Indian Territories. At the same time, ranchers in Texas began to move into the area in search of new pasture lands, and the government eventually opened the land to settlement, creating “land runs” in which settlers were allowed to cross the border at a particular hour to claim homesteads. Settlers who broke the law and crossed the border sooner than allowed were called “sooners,” which eventually became the state’s nickname. Oklahoma became the 47th state in 1907, following several acts that incorporated more and more Indian tribal land into U.S. territory. After its inclusion in the union, Oklahoma became a center for oil production, with much of the state’s early growth coming from that industry. During the 1930s, Oklahoma suffered from droughts and high winds, destroying many farms and creating the infamousDust Bowl of the Great Depression era.',
        'image': `url('img/oklahoma.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.visitokc.com/' 
    },
    {
        'name': 'Oregon',
        'nickname': 'The Beaver State',
        'population': '4,190,713',
        'info': 'Following exploration by the Spanish and French, in the 17th and 18th centuries, Oregon was mapped by the Lewis and Clark expedition in their search for the Northwest Passage. Starting in the 1830s, many groups of pioneers travelled to the state on the famous Oregon Trail, and the U.S. began joint settlement of the area with the United Kingdom. In 1846, the border between U.S. and British territory was formally established at the 49th parallel – the part of the territory that was given to Britain would ultimately become part of Canada. Oregon was officially admitted to the union as a state on February 14th, 1859. Today, Portland, Oregon’s largest city, is considered one of the top cities in the nation in terms of quality of life, and the state is also known as one of the nation’s top producers of wine, boasting over 300 wineries.',
        'image': `url('img/oregon.jpg')`,
        'outline' : "",

        'learn-more': 'https://traveloregon.com/' 
    },
    {
        'name': 'Pennsylvania',
        'nickname': 'The Keystone State',
        'population': '12,807,060',
        'info': 'One of the original 13 colonies, Pennsylvania was founded by William Penn as a haven for his fellow Quakers. Pennsylvania’s capital, Philadelphia, was the site of the first and second Continental Congresses in 1774 and 1775, the latter of which produced the Declaration of Independence, sparking the American Revolution. After the war, Pennsylvania became the second state, after Delaware, to ratify the U.S. Constitution. In the American Civil War (1861-1865), Pennsylvania was the site of the Battle of Gettysburg,in whichUnion General George Meade defeated Confederate General Robert E. Lee, bringing an end to the Confederacy’s Northern invasion, as well as Lincoln’s famous Gettysburg Address. Tourists are drawn to Pennsylvania by its monuments to America’s revolutionary history, includingIndependence Hall and the Liberty Bell. Famous Pennsylvanians include patriot and inventor Benjamin Franklin, frontiersman Daniel Boone, painter Mary Cassatt,inventor Robert Fulton and comedian Bill Cosby.',
        'image': `url('img/pennsylvania.jpg')`,
        'outline' : "",

        'learn-more': 'https://visitpa.com/' 
    },
    {
        'name': 'Rhode Island',
        'nickname': 'The Ocean State',
        'population': '1,057,315',
        'info': 'Rhode Island, measuring only about 48 miles long and 37 miles wide, is the smallestof the U.S. states. Despite its small area, Rhode Island, known as the “Ocean State,” boasts over 400 miles of coastline. Rhode Island was founded by Roger Williams in 1636, who had been banished fromthe Massachusetts colony for hisadvocacy ofreligious tolerance and the separation of church and state.During the colonial period, Newport was a major hub for shipping and trade, and in the 19th century Rhode Island was at the forefront of the Industrial Revolution and the establishment of power-driven textile mills.Rhode Island hosted the first National Lawn Tennis Championship in 1899, and is home to the Tennis Hall of Fame.Famous Rhode Islanders include novelists Cormac MacCarthy and Jhumpa Lahiri, actor James Woods, television personality Meredith Vieira and Civil War U.S. Army officer Ambrose Burnside.',
        'image': `url('img/rhode-island.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.visitrhodeisland.com/' 
    },
    {
        'name': 'South Carolina',
        'nickname': 'The Palmetto State',
        'population': '5,084,127',
        'info': 'Settled by the English in 1670, South Carolina became the eighth state to ratify the U.S. constitution in 1788.Itsearly economy was largely agricultural, benefitting from thearea’s fertile soil,andplantation farmersrelied on theslave trade for cheap labor to maximize their profits. By 1730,people of African descent made up two thirds of the colony’spopulation. South Carolinabecame the first state to secede from the union in 1861, and was the site of the first shots of the Civil War–the shellingof the federally heldFort Sumter by Confederate troops on April 12, 1861. Today, South Carolina coastline near Myrtle Beach has developed into one of the premiere resort destinations on the East Coast, and has over 100 golf courses. Famous South Carolinians include musicians James Brown, Chubby Checker and Dizzy Gillespie, novelist Pat Conroy, boxer Joe Frazier, tennis champion Althea Gibson, politician Jesse Jackson and long-serving U.S. Senator Strom Thurmond.',
        'image': `url('img/south-carolina.jpeg')`,
        'outline' : "",

        'learn-more': 'https://discoversouthcarolina.com/' 
    },
    {
        'name': 'South Dakota',
        'nickname': 'The Mount Rushmore State',
        'population': '882,235',
        'info': 'The territory that would become South Dakota was added to the United States in 1803 as part of the Louisiana Purchase.The first permanent American settlement was established at Fort Pierre by the Lewis and Clark expedition in 1804.White settlement of the territory in the 1800sled to clashes with the Sioux, as some of the land had been granted to the tribe by an earlier treaty. Nevertheless, the territory was incorporated into the union on November 2, 1889, along with North Dakota. Due to a controversy over which state would be admitted to the union first, President Benjamin Harrison shuffled the bills and signed one at random, with the order going unrecorded, though North Dakota is traditionally listed first. Today, a major part of South Dakota’s economy is fueled by tourism–visitors flock to the state to see Mt. Rushmore, which features 60-foot-tall sculptures of the faces of Presidents Washington, Jefferson, Roosevelt and Lincoln. Famous South Dakotans include newscaster Tom Brokaw, senator and vice president Hubert Humphrey and model-actress Cheryl Ladd.',
        'image': `url('img/south-dakota.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.travelsouthdakota.com/' 
    },
    {
        'name': 'Tennessee',
        'nickname': 'The Volunteer State',
        'population': '6,770,010',
        'info': 'Tennessee became the 16th state of the union in 1796. It is just 112 miles wide, but stretches 432 miles from the Appalachian Mountains boundary with North Carolina in the east to the Mississippi River borders with Missouri and Arkansas in the west. Tennessee’s two largest cities, Memphis and Nashville, are known as centers of blues and country music, respectively,and have played host tothe likes ofElvis Presley, Jerry Lee Lewis, Muddy Waters, Johnny Cash, B.B. King and Dolly Parton. Memphis is also famous for its barbecue and hosts the well-attended “Memphis in May” barbecue competition each year.',
        'image': `url('img/tennessee.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.tnvacation.com/' 
    },
    {
        'name': 'Texas',
        'nickname': 'The Lone Star State',
        'population': '28,701,845',
        'info': 'Spanish missionaries were the first European settlers in Texas, founding San Antonio in 1718. Hostile natives and isolation from other Spanish colonies kept Texas sparsely populated until following the Revolutionary War and the War of Mexican Independence, when the newly established Mexican government began to allow settlers from the U.S. to claim land there. This led to a population explosion, but dramatically reduced the percentage of the population with Mexican heritage, causing friction with the government in Mexico City. After several smaller insurrections, the Texas Revolution broke out, and the state became an independent nation in 1835. However, the newly formed Texas Republic was unable to defend itself from further incursions by Mexican troops, and eventually negotiated with the U.S. to join the union in 1845.',
        'image': `url('img/texas.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.traveltexas.com/' 
    },
    {
        'name': 'Utah',
        'nickname': 'Beehive State',
        'population': '3,161,105',
        'info': 'Mountains, high plateaus and deserts form most of Utah’s landscape. At Four Corners, in the southeast, Utah meets Colorado, New Mexico and Arizona at right angles, the only such meeting of states in the country. Utah became the 45th member of the union on Jan. 4, 1896, with Salt Lake City as its capital. Utah is known for having some of the best skiing in the country, and the mountains near Salt Lake City receive an average of 500 inches of snow per year. During the 19th century many Mormons settled in Utah, and today approximately 60 percent of state’s residents are members of the church. The Sundance Film Festival, one of the premiere independent film festivals in the world, is held each January in Park City.',
        'image': `url('img/utah.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.visitutah.com/' 
    },
    {
        'name': 'Vermont',
        'nickname': 'The Green Mountain State',
        'population': '626,299',
        'info': 'Vermont was initially settled in the early 18th century by both the British and French,and conflicts between the two nations continued until the French defeat in the French and Indian War, after which the land was ceded to England. During the American Revolution, Vermont declared independence separately from the original 13 colonies, although the Continental Congress refused to recognize it. Vermont was finally admitted to the union as the 14th state in 1790, after 14 years as an independentrepublic. The name of the state is derived from”montagne verte,” French forgreen mountain, giving rise to the state’s “Green Mountain State” nickname. Today, Vermont’s mountains are a popular destination for skiers and snowboarders. It is the country’s leading producer of maple syrup and is the home of the popular Ben & Jerry’s ice cream.',
        'image': `url('img/vermont.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.vermontvacation.com/' 
    },
    {
        'name': 'Virginia',
        'nickname': 'Old Dominion',
        'population': '8,517,685',
        'info': 'One of the 13 original colonies, Virginia was the first part of the country permanently settled by the English, who established Jamestown on the banks of the James River in 1607. The home state of George Washington, Thomas Jefferson and other founding fathers, Virginia played an important role in the American Revolution (1775-83). During the Civil War (1861-65), the city of Richmond, Virginia, became the capital of the Confederacy, and more than half of the conflict’s battles were fought in the state. Today, many government institutions are headquartered in Virginia, particularly in Arlington, located across the Potomac River from Washington, D.C. In addition to eight presidents, famous Virginians include singer Ella Fitzgerald, tennis star Arthur Ashe, actress Shirley MacLaine and authors Willa Cather and Tom Wolfe.',
        'image': `url('img/virginia.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.virginia.org/' 
    },
    {
        'name': 'Washington',
        'nickname': 'The Evergreen State',
        'population': '7,535,591',
        'info': 'Granted statehood in 1889, Washingtonwas namedin honor ofGeorge Washington; it is the only U.S. state named after a president. The state’s coastal location and excellent harborshave contributed to its role as a leader in tradewith Alaska, Canada and countries of the Pacific Rim. The majestic Mount Rainier soars above Seattle and is the highest peak in the continental United States. Another Washingtonlandmark, Mount St. Helens erupted in 1980, the deadliest and most economically destructive volcanic event in U.S. history. The Evergreen State is the nation’s leader producer of apples and is the home of the coffee chain Starbucks. Famous Washingtonians include musician Jimi Hendrix, entertainer Bing Crosby and computer pioneer Bill Gates.',
        'image': `url('img/washington.jpg')`,
        'outline' : "",

        'learn-more': 'http://www.experiencewa.com/' 
    },
    {
        'name': 'West Virginia',
        'nickname': 'Mountain State',
        'population': '1,805,832',
        'info': 'When the state of Virginia voted to secede from the United States during the Civil War (1861-65), the people of the rugged and mountainous western region of the state opposed the decision and organized to form their own state, West Virginia,in support of the Union. Congress granted statehood to West Virginia on June 20, 1863. The West Virginia town of Harpers Ferry was the site of John Brown’s ill-fated 1859 raid on the federal armory there. AlthoughBrown’s plan to arm a largescale slave revolt with weapons from the armory ultimately failed andBrown was hanged, the raiddid succeed in inflaming white Southern fears of slave rebellions and increased the mounting tension betweenNorth and Southprior tothe Civil War.Today, West Virginia is a major coal-producing state, supplying 15 percent of the nation’s coal. The New River Gorge Bridge near Fayetteville is the longest steel arch bridge in the world. Every October, the town hosts a Bridge Day celebration when the road is closed to traffic and individuals are allowed to parachute and bungee jump off the bridge; the event attracts close to 100,000 participants and spectators each year. Famous West Virginia natives include actor Don Knotts, gymnast Mary Lou Retton and test pilot Chuck Yeager.',
        'image': `url('img/west-virginia.jpg')`,
        'outline' : "",

        'learn-more': 'https://wvtourism.com/' 
    },
    {
        'name': 'Wisconsin',
        'nickname': 'The Badger State',
        'population': '5,813,568',
        'info': 'Wisconsin became aU.S. territoryfollowing the American Revolution and soon after began attracting settlers looking for work inits mining, lumber and dairy industries. It was admitted to the union as the 30th state in 1848.In the years leading up to the Civil War,Wisconsin was an important stop on the Underground Railroad, with manyslaves passing through the state on their way to freedom in Canada. Today, Wisconsin leads the nation in dairy production and is known for the quality of its cheddar cheese–residents even sometimesrefer to themselves as “cheeseheads.” Famous Wisconsinites include architect Frank Lloyd Wright, magician Harry Houdini andU.S. Army General Douglas MacArthur.',
        'image': `url('img/wisconsin.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.travelwisconsin.com/' 
    },
    {
        'name': 'Wyoming',
        'nickname': 'The Equality State',
        'population': '577,737',
        'info': 'Wyoming became the 44th state to join the union in 1890. Wyoming was the first U.S. state to allow women to vote–an achievement that represented oneof the early victoriesof the Americanwomen’s suffrage movement. Today, although it is the 10th largest state by area, Wyoming has the smallest population of all the states, with just over 550,000 residents.The state is home to most of Yellowstone National Park, one of the most popular national parks in the country. Millions of touristsvisit Wyomingevery year to seethe geyser Old Faithful and the Grand Prismatic Spring, the largest hot spring in the country, as well as a variety of wildlife including moose, elk, bighorn sheep, wolves, coyotes, eagles, black bears and grizzly bears.',
        'image': `url('img/wyoming.jpg')`,
        'outline' : "",

        'learn-more': 'https://www.travelwyoming.com/' 
    }
]


const statesBtn = document.querySelector('#states-btn');
const infoBtn = document.querySelector('#info-btn');
const infoBox = document.querySelector('.info-box');
const infoStateNickname = document.querySelector('.info-state__nickname');
const pop = document.querySelector('.pop');
const infoStateSummary = document.querySelector('.info-state__summary');
const infoStateOutline = document.querySelector('.info-state__outline');
const page = document.querySelector('#page');
const buttons = document.querySelector('.buttons');
const learnMore = document.querySelector('.learn-more');
const statesBox = document.querySelector('.states-box');
const stateName = document.querySelector('#state-name');
const statesList = document.querySelectorAll('.state');
const close = document.querySelector('.close');
let currentChosenState;

const closeBox = e => {
    infoBox.classList.remove('info-show');
    statesBox.classList.remove('states-show');
    closeBoxes(e);

}
const infoOpen = e => {
    e.preventDefault();
    infoBox.classList.add('info-show');
    closeBoxes(e);
    buttons.style.opacity = '0';
}
const closeBoxes = e => {
    if(e.target === close ){
        close.classList.remove('close-show__info');
        close.classList.remove('close-show__states');
    } else {
        e.target === infoBtn ? close.classList.toggle('close-show__info') : close.classList.toggle('close-show__states');
    }
    buttons.style.opacity = '1';
}
const statesOpen = e => {
    e.preventDefault();
    statesBox.classList.add('states-show');
    closeBoxes(e);
    buttons.style.opacity = '0';
}
let photos;

const grabPhoto = (clicked) => {
    page.style.backgroundImage = clicked.image;
    //  photos = fetch(`/${clicked.name}`, {method: 'POST'})
    // .then(res => {
    //     console.log(res);
    //         return res.json();
    //     // throw new Error('Request failed');
    // })
    // .catch(error => {
    //     console.log(error.message);
    // })
    setInterval(() => {
        stateName.classList.remove('state-showcase');
    }, 1500)
}
const remove = () => {
    stateName.classList.remove('state-name-animated');
}
const getRandomState = () => {
    const randomStateIndex = Math.floor(Math.random() * states.length);
    const randomState = states[randomStateIndex];
    currentChosenState = randomState;
    grabPhoto(randomState);
    stateName.classList.add('state-name');
    stateName.textContent = randomState.name;
    infoStateNickname.textContent = randomState.nickname;
    infoStateSummary.textContent = randomState.info;
    pop.textContent = randomState.population;
    learnMore.setAttribute('href', randomState["learn-more"]);
    // infoStateOutline.src = randomState.outline;
}

const changeState = (e) => {
    e.preventDefault();
    statesBox.classList.remove('states-show');
    closeBoxes(e);
    let clicked;
    for(let i = 0; i < states.length; i++){
        if(states[i].name === e.target.textContent){
            clicked = states[i];
            stateName.classList.add('state-name-animated');
            stateName.textContent = clicked.name;
            infoStateNickname.textContent = clicked.nickname;
            infoStateSummary.textContent = clicked.info;
            pop.textContent = clicked.population;
            learnMore.setAttribute('href', clicked["learn-more"]);
            setTimeout(() => remove() , 1500);

            // infoStateOutline.src = clicked.outline;
            break;
        }
    }
    grabPhoto(clicked);
    currentChosenState = clicked;
}
// page.style.backgroundImage = 'url("https://www.dccomics.com/sites/default/files/DCVol2Marquee_57466713405381.60938022.jpg")';
getRandomState();

close.addEventListener('click', closeBox);
infoBtn.addEventListener('click', infoOpen);
statesBtn.addEventListener('click', statesOpen);
statesList.forEach(state => state.addEventListener('click', changeState));
page.style.transition = 'background-image 2.5s ease-in-out';
// setInterval( () => {
//     grabPhoto(currentChosenState)
// }, 5000);