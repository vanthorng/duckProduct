export type Locale = 'en' | 'km';

export const translations: Record<Locale, Record<string, string>> = {
    en: {
        'meta.language': 'Language',
        'meta.english': 'EN',
        'meta.khmer': 'KH',

        'layout.phoneLabel': 'Phone',
        'layout.emailLabel': 'Email',
        'layout.brand': 'Duck Product Co.',
        'layout.tagline':
            'Professional farm supply and food-grade duck products',
        'layout.footerTitle': 'Ready for your next order?',
        'layout.footerSubtitle':
            'Same-day farm pickup and scheduled delivery for selected zones.',
        'layout.footerTag1': 'Food-grade processing',
        'layout.footerTag2': 'Batch traceability',
        'layout.footerTag3': 'Wholesale support',
        'layout.footerCtaOrder': 'Start an Online Order',
        'layout.footerCtaContact': 'Contact Sales Team',

        'nav.home': 'Home',
        'nav.ourFarm': 'Our Farm',
        'nav.products': 'Duck Products',
        'nav.order': 'Order Online',
        'nav.contact': 'Contact / Location',

        'home.kicker': 'Cambodia-style farm-to-table business',
        'home.title':
            'Professional duck products for households, restaurants, and farms.',
        'home.subtitle':
            'We deliver food-grade duck eggs, premium meat cuts, roasted duck, and duck droppings herb sacks with dependable supply and clear pricing.',
        'home.ctaOrder': 'Order Online',
        'home.ctaProducts': 'View Products',
        'home.imageAlt': 'Real Cambodia countryside farm landscape',
        'home.highlights.output.label': 'Daily egg output',
        'home.highlights.output.value': '1,200+',
        'home.highlights.output.desc':
            'Collected, graded, and packed with same-day quality checks.',
        'home.highlights.area.label': 'Farm area',
        'home.highlights.area.value': '32 hectares',
        'home.highlights.area.desc':
            'Open water and natural grazing zones for healthier stock.',
        'home.highlights.delivery.label': 'Delivery window',
        'home.highlights.delivery.value': '2-4 hours',
        'home.highlights.delivery.desc':
            'Reliable local delivery for retail and business orders.',
        'home.products.kicker': 'Duck products',
        'home.products.title': 'Best sellers for daily demand',
        'home.products.viewAll': 'Explore all products',
        'home.products.eggs.name': 'Fresh Duck Eggs',
        'home.products.eggs.desc':
            'Large, clean, and rich eggs packed by tray for homes, shops, and kitchens.',
        'home.products.eggs.price': 'From $4.80 / tray',
        'home.products.meat.name': 'Premium Duck Meat',
        'home.products.meat.desc':
            'Vacuum-packed cuts with traceable batch dates for consistent preparation.',
        'home.products.meat.price': 'From $7.50 / kg',
        'home.products.roasted.name': 'Roasted Signature Duck',
        'home.products.roasted.desc':
            'Slow-roasted house style duck ready for serving or business resale.',
        'home.products.roasted.price': 'From $16.00 / duck',
        'home.products.herb.name': 'Duck Droppings Herb (Sack)',
        'home.products.herb.desc':
            'Nutrient-rich fertilizer blend for herbs, vegetables, and farm soil care.',
        'home.products.herb.price': 'From $6.00 / sack',
        'home.story.kicker': 'Real farm moments',
        'home.story.title': 'See the business behind the products',
        'home.story.desc':
            'From countryside grazing zones to prepared roasted duck, the business serves household buyers, restaurants, resellers, and growers through one direct workflow.',
        'home.story.card1.title': 'Fresh from farm',
        'home.story.card1.desc':
            'Morning collection, sorting, and packing reduce waiting time and protect product quality.',
        'home.story.card2.title': 'Prepared for business',
        'home.story.card2.desc':
            'Restaurant, resale, and bulk buyers receive practical packaging and direct support for repeat orders.',
        'home.story.card3.title': 'Organic reuse',
        'home.story.card3.desc':
            'Duck droppings herb sacks turn farm byproducts into useful fertilizer for crops, herbs, and gardens.',
        'home.story.caption1': 'Farm landscape and grazing environment',
        'home.story.caption2': 'Duck farm activity and field management',
        'home.story.caption3':
            'Prepared roasted duck for retail and food service',

        'farm.kicker': 'Our farm',
        'farm.title': 'Built for quality, consistency, and responsible growth.',
        'farm.subtitle':
            'We combine practical farm experience with modern hygiene, clear workflows, and reliable packaging standards for both food and farming customers.',
        'farm.imageAlt': 'Real duck farm photo with ducks in the field',
        'farm.sceneKicker': 'Cambodia farm scene',
        'farm.sceneTitle': 'Local farming style, professional output',
        'farm.sceneDesc':
            'This section reflects Cambodia-inspired farm operations where food products and duck droppings herb sacks are handled through one reliable supply chain.',
        'farm.practice.ponds.title': 'Healthy open ponds',
        'farm.practice.ponds.desc':
            'Ducks rotate through open pond zones to support natural movement and lower stress.',
        'farm.practice.traceability.title': 'Batch traceability',
        'farm.practice.traceability.desc':
            'Every egg tray and meat pack carries clear date and batch identification.',
        'farm.practice.feed.title': 'Feed quality control',
        'farm.practice.feed.desc':
            'Balanced nutrition checks are performed weekly for consistent growth.',
        'farm.practice.reuse.title': 'Responsible waste reuse',
        'farm.practice.reuse.desc':
            'Organic byproducts are processed into duck droppings herb sacks for farms.',
        'farm.routine.kicker': 'Daily routine',
        'farm.routine.title': 'How the day flows',
        'farm.routine.cta': 'Book your order slot',
        'farm.routine.step1.time': '05:30 AM',
        'farm.routine.step1.task': 'Egg collection and first sorting',
        'farm.routine.step2.time': '08:00 AM',
        'farm.routine.step2.task': 'Farm health checks and feed cycle',
        'farm.routine.step3.time': '11:30 AM',
        'farm.routine.step3.task': 'Product prep for online orders',
        'farm.routine.step4.time': '03:00 PM',
        'farm.routine.step4.task': 'Roasting, packing, and dispatch',
        'farm.facts.kicker': 'Farm facts',
        'farm.facts.title': 'Operational details buyers usually ask for',
        'farm.facts.item1.label': 'Collection cycle',
        'farm.facts.item1.value':
            'Daily morning collection and same-day sorting for eggs and fresh stock.',
        'farm.facts.item2.label': 'Packaging',
        'farm.facts.item2.value':
            'Tray, vacuum pack, whole roast, and 25kg or 50kg sack options.',
        'farm.facts.item3.label': 'Customer types',
        'farm.facts.item3.value':
            'Households, food stalls, restaurants, resellers, and growers.',
        'farm.facts.item4.label': 'Response time',
        'farm.facts.item4.value':
            'Phone and Telegram support during working hours for quick confirmation.',
        'farm.gallery.kicker': 'Real working environment',
        'farm.gallery.title': 'More of the farm surroundings',
        'farm.gallery.desc':
            'These images show the kind of environment behind the business: open space, practical farm access, and direct supply readiness.',
        'farm.gallery.caption1': 'Open duck field environment',
        'farm.gallery.caption2': 'Countryside access near the farm',

        'products.kicker': 'Duck products',
        'products.title':
            'Eggs, meat, roasted duck, and herb sacks for daily demand.',
        'products.subtitle':
            'Choose from retail-ready packs or wholesale quantities with clear batch labels, stable quality, and practical packaging.',
        'products.new.kicker': 'New category',
        'products.new.title': 'Duck Droppings Herb now in sack format',
        'products.new.desc':
            'Available in 25kg and 50kg sacks for gardens, growers, and agricultural partners requiring nutrient support for crops.',
        'products.imageAlt': 'Real roasted duck product photo',
        'products.item.eggs.category': 'Eggs',
        'products.item.eggs.name': 'Fresh Duck Eggs',
        'products.item.eggs.desc':
            'Cleaned and graded eggs with rich yolk color, suitable for home and commercial kitchens.',
        'products.item.eggs.packaging': 'Tray of 30 eggs / bulk crate options',
        'products.item.eggs.price': '$4.80 - $5.60 per tray',
        'products.item.meat.category': 'Meat',
        'products.item.meat.name': 'Premium Duck Meat Cuts',
        'products.item.meat.desc':
            'Breast, thigh, and whole duck options with strict cold-chain handling.',
        'products.item.meat.packaging':
            '1kg vacuum pack / whole duck by weight',
        'products.item.meat.price': '$7.50 - $11.20 per kg',
        'products.item.roasted.category': 'Roasted',
        'products.item.roasted.name': 'House Roasted Duck',
        'products.item.roasted.desc':
            'Slow roasted duck with savory glaze, ready for immediate serving or takeaway.',
        'products.item.roasted.packaging': 'Whole roasted duck / half cut set',
        'products.item.roasted.price': '$16.00 - $24.00 per duck',
        'products.item.herb.category': 'Fertilizer',
        'products.item.herb.name': 'Duck Droppings Herb (Sack)',
        'products.item.herb.desc':
            'Fermented duck droppings herb fertilizer for vegetables, herbs, and crop enrichment.',
        'products.item.herb.packaging': 'Sack 25kg / Sack 50kg',
        'products.item.herb.price': '$6.00 - $10.00 per sack',
        'products.why.kicker': 'Why buyers choose us',
        'products.why.title': 'Built for households and food businesses',
        'products.why.cta': 'Talk to sales',
        'products.why.point1':
            'Food-grade handling and daily freshness checks.',
        'products.why.point2': 'Reliable stock for repeat business customers.',
        'products.why.point3': 'Simple wholesale pricing for larger volumes.',
        'products.why.point4':
            'Direct support via phone, email, and online form.',
        'products.notes.kicker': 'Ordering details',
        'products.notes.title': 'More information before you order',
        'products.notes.point1.title': 'Retail and wholesale',
        'products.notes.point1.desc':
            'Small household orders and larger business orders are both supported with clear pricing and practical packaging.',
        'products.notes.point2.title': 'Pickup and delivery',
        'products.notes.point2.desc':
            'Customers can collect from the farm or arrange local delivery for selected districts and business schedules.',
        'products.notes.point3.title': 'Product handling',
        'products.notes.point3.desc':
            'Eggs are graded, meat is packed carefully, roasted duck is ready to serve, and herb sacks are prepared for transport.',
        'products.notes.caption1': 'Roasted duck prepared for sale',
        'products.notes.caption2':
            'Countryside source environment behind the product line',

        'order.kicker': 'Order online',
        'order.title': 'Place your duck product order in minutes.',
        'order.subtitle':
            'Professional ordering flow for homes and business clients. Connect this form to backend validation and your order processing workflow.',
        'order.step1.title': '1. Choose products',
        'order.step1.desc':
            'Select eggs, meat cuts, roasted duck, or duck droppings herb sacks.',
        'order.step2.title': '2. Pick delivery option',
        'order.step2.desc':
            'Choose farm pickup or local delivery with your preferred date and time.',
        'order.step3.title': '3. Confirm quickly',
        'order.step3.desc':
            'Submit contact details and we will confirm stock, schedule, and total price.',
        'order.form.title': 'Order form preview',
        'order.form.subtitle':
            'Fill in this structure to collect clear, complete order information.',
        'order.form.name': 'Full name',
        'order.form.namePlaceholder': 'Sophea Srey',
        'order.form.phone': 'Phone number',
        'order.form.phonePlaceholder': '+855 69 866 032',
        'order.form.productType': 'Product type',
        'order.form.productOption1': 'Fresh Duck Eggs',
        'order.form.productOption2': 'Duck Meat Cuts',
        'order.form.productOption3': 'Roasted Duck',
        'order.form.productOption4': 'Duck Droppings Herb (Sack)',
        'order.form.quantity': 'Quantity',
        'order.form.quantityPlaceholder': '2 trays / 5 kg / 1 duck / 1 sack',
        'order.form.notes': 'Delivery notes',
        'order.form.notesPlaceholder':
            'Preferred delivery time, landmark, or special request',
        'order.form.submit': 'Submit Example Order',

        'contact.kicker': 'Contact / location',
        'contact.title': 'Visit the farm or contact us for direct orders.',
        'contact.subtitle':
            'Connect quickly with our sales team, get directions, and schedule pickups.',
        'contact.card.phone.title': 'Phone / Telegram',
        'contact.card.phone.value': '+855 69 866 032, 095855474',
        'contact.card.phone.desc':
            'Call or message for order confirmation and delivery support.',
        'contact.card.email.title': 'Email',
        'contact.card.email.value': 'vanthorngthai31@gmail.com',
        'contact.card.email.desc':
            'Send wholesale or restaurant inquiries here.',
        'contact.card.address.title': 'Farm Address',
        'contact.card.address.value': 'Open in Google Maps',
        'contact.card.address.desc':
            'Tap to view exact farm location and route.',
        'contact.location.title': 'Farm location',
        'contact.location.label': 'Farm Address :',
        'contact.location.button': 'Open farm address in Google Maps',
        'contact.location.imageAlt': 'Real Cambodia countryside farm landscape',
        'contact.location.photoAlt1':
            'Real Cambodia countryside rice fields near duck farm area',
        'contact.location.photoAlt2':
            'Real Cambodia farm access landscape near local fields',
        'contact.location.photoCaption1':
            'Real Cambodia countryside view near the farm access route.',
        'contact.location.photoCaption2':
            'Real Cambodia rural landscape around local farm zones.',
        'contact.location.access.title': 'Access notes',
        'contact.location.access.note1':
            'Use the Google Maps link above for the fastest route.',
        'contact.location.access.note2':
            'Motorbike, tuk-tuk, car, and small truck can access the farm road.',
        'contact.location.access.note3':
            'Please call 20-30 minutes before arrival for quick handover.',
        'contact.location.feature.pickup.label': 'Farm pickup',
        'contact.location.feature.pickup.value': 'Daily slots available',
        'contact.location.feature.delivery.label': 'Delivery zone',
        'contact.location.feature.delivery.value':
            'Phnom Penh and selected nearby districts',
        'contact.location.feature.support.label': 'Sales support',
        'contact.location.feature.support.value': 'Phone, Telegram, and email',
        'contact.location.realPhotoNote':
            'Photo references are real Cambodia countryside scenes and are used to reflect the farm environment style.',
        'contact.hours.title': 'Working hours',
        'contact.hours.day1': 'Monday - Friday',
        'contact.hours.day2': 'Saturday',
        'contact.hours.day3': 'Sunday',
        'contact.hours.time1': '06:00 AM - 06:00 PM',
        'contact.hours.time2': '06:30 AM - 05:00 PM',
        'contact.hours.time3': '08:00 AM - 12:00 PM',
        'contact.hours.visitHint':
            'For faster service, please share your visit time before arrival.',
        'contact.hours.cta': 'Continue to online order',
    },
    km: {
        'meta.language': 'ភាសា',
        'meta.english': 'EN',
        'meta.khmer': 'KH',

        'layout.phoneLabel': 'ទូរស័ព្ទ',
        'layout.emailLabel': 'អ៊ីមែល',
        'layout.brand': 'ក្រុមហ៊ុនផលិតផលទា',
        'layout.tagline': 'ផ្គត់ផ្គង់កសិដ្ឋាន និងផលិតផលទាមានស្តង់ដារអាហារ',
        'layout.footerTitle': 'ត្រៀមបញ្ជាទិញបន្ទាប់របស់អ្នកហើយឬនៅ?',
        'layout.footerSubtitle':
            'យកទំនិញពីកសិដ្ឋានថ្ងៃតែមួយ និងដឹកជញ្ជូនតាមកាលវិភាគសម្រាប់តំបន់កំណត់។',
        'layout.footerTag1': 'កែច្នៃតាមស្តង់ដារអាហារ',
        'layout.footerTag2': 'តាមដានតាមកូដបាច់ផលិត',
        'layout.footerTag3': 'គាំទ្រលក់ដុំ',
        'layout.footerCtaOrder': 'ចាប់ផ្តើមបញ្ជាទិញអនឡាញ',
        'layout.footerCtaContact': 'ទាក់ទងក្រុមលក់',

        'nav.home': 'ទំព័រដើម',
        'nav.ourFarm': 'កសិដ្ឋានរបស់យើង',
        'nav.products': 'ផលិតផលទា',
        'nav.order': 'បញ្ជាទិញអនឡាញ',
        'nav.contact': 'ទំនាក់ទំនង / ទីតាំង',

        'home.kicker': 'អាជីវកម្មពីកសិដ្ឋានដល់តុអាហារបែបកម្ពុជា',
        'home.title':
            'ផលិតផលទាដែលមានវិជ្ជាជីវៈ សម្រាប់គ្រួសារ ភោជនីយដ្ឋាន និងកសិដ្ឋាន។',
        'home.subtitle':
            'យើងផ្គត់ផ្គង់ស៊ុតទាស្តង់ដារអាហារ សាច់ទាគុណភាពខ្ពស់ ទាអាំង និងជី Duck Droppings Herb ជាបាវ ដោយមានការផ្គត់ផ្គង់ទុកចិត្តបាន និងតម្លៃច្បាស់លាស់។',
        'home.ctaOrder': 'បញ្ជាទិញអនឡាញ',
        'home.ctaProducts': 'មើលផលិតផល',
        'home.imageAlt': 'រូបថតពិតទេសភាពកសិដ្ឋាននៅជនបទកម្ពុជា',
        'home.highlights.output.label': 'បរិមាណស៊ុតប្រចាំថ្ងៃ',
        'home.highlights.output.value': '1,200+',
        'home.highlights.output.desc':
            'ប្រមូល ចាត់ថ្នាក់ និងវេចខ្ចប់ជាមួយការត្រួតពិនិត្យគុណភាពក្នុងថ្ងៃតែមួយ។',
        'home.highlights.area.label': 'ទំហំកសិដ្ឋាន',
        'home.highlights.area.value': '32 ហិកតា',
        'home.highlights.area.desc':
            'តំបន់ទឹកបើកចំហ និងចិញ្ចឹមធម្មជាតិ សម្រាប់សុខភាពសត្វល្អ។',
        'home.highlights.delivery.label': 'ពេលដឹកជញ្ជូន',
        'home.highlights.delivery.value': '2-4 ម៉ោង',
        'home.highlights.delivery.desc':
            'ដឹកជញ្ជូនក្នុងតំបន់បានទាន់ពេល សម្រាប់លក់រាយ និងអាជីវកម្ម។',
        'home.products.kicker': 'ផលិតផលទា',
        'home.products.title': 'ផលិតផលលក់ដាច់ប្រចាំថ្ងៃ',
        'home.products.viewAll': 'មើលផលិតផលទាំងអស់',
        'home.products.eggs.name': 'ស៊ុតទាស្រស់',
        'home.products.eggs.desc':
            'ស៊ុតធំ ស្អាត និងមានគុណភាពល្អ វេចខ្ចប់ជាថាសសម្រាប់គ្រួសារ ហាង និងផ្ទះបាយ។',
        'home.products.eggs.price': 'ចាប់ពី $4.80 / ថាស',
        'home.products.meat.name': 'សាច់ទាគុណភាពខ្ពស់',
        'home.products.meat.desc':
            'សាច់វេចខ្ចប់បិតខ្យល់ មានកូដតាមដានបាច់ផលិតច្បាស់លាស់។',
        'home.products.meat.price': 'ចាប់ពី $7.50 / គីឡូក្រាម',
        'home.products.roasted.name': 'ទាអាំងរូបមន្តពិសេស',
        'home.products.roasted.desc':
            'ទាអាំងយឺតៗ រសជាតិឆ្ងាញ់ រួចរាល់សម្រាប់បម្រើ ឬលក់បន្ត។',
        'home.products.roasted.price': 'ចាប់ពី $16.00 / ក្បាល',
        'home.products.herb.name': 'Duck Droppings Herb (បាវ)',
        'home.products.herb.desc':
            'ជីសរីរាង្គសំបូរសារធាតុចិញ្ចឹម សម្រាប់បន្លែ ឱសថស្មៅ និងថែរក្សាដីកសិកម្ម។',
        'home.products.herb.price': 'ចាប់ពី $6.00 / បាវ',
        'home.story.kicker': 'រូបភាពពិតពីកសិដ្ឋាន',
        'home.story.title': 'មើលអាជីវកម្មនៅពីក្រោយផលិតផល',
        'home.story.desc':
            'ចាប់ពីតំបន់ជនបទ និងការចិញ្ចឹម រហូតដល់ទាអាំងដែលរៀបចំរួច អាជីវកម្មនេះផ្គត់ផ្គង់ដល់គ្រួសារ ភោជនីយដ្ឋាន អ្នកលក់បន្ត និងអ្នកដាំដុះ តាមដំណើរការផ្ទាល់តែមួយ។',
        'home.story.card1.title': 'ស្រស់ចេញពីកសិដ្ឋាន',
        'home.story.card1.desc':
            'ការប្រមូល ចាត់ថ្នាក់ និងវេចខ្ចប់នៅពេលព្រឹក ជួយកាត់បន្ថយពេលរង់ចាំ និងការពារគុណភាពផលិតផល។',
        'home.story.card2.title': 'រៀបចំសម្រាប់អាជីវកម្ម',
        'home.story.card2.desc':
            'អតិថិជនភោជនីយដ្ឋាន ការលក់បន្ត និងការលក់បរិមាណធំ ទទួលបានការវេចខ្ចប់សមស្រប និងការគាំទ្រផ្ទាល់សម្រាប់ការបញ្ជាទិញជាបន្តបន្ទាប់។',
        'home.story.card3.title': 'ប្រើប្រាស់សរីរាង្គឡើងវិញ',
        'home.story.card3.desc':
            'ជី Duck Droppings Herb ជាបាវ បម្លែងផលប៉ះពាល់ពីកសិដ្ឋានទៅជាជីមានប្រយោជន៍សម្រាប់ដំណាំ ឱសថស្មៅ និងសួនច្បារ។',
        'home.story.caption1': 'ទេសភាពកសិដ្ឋាន និងបរិយាកាសចិញ្ចឹម',
        'home.story.caption2': 'សកម្មភាពកសិដ្ឋានទា និងការគ្រប់គ្រងវាល',
        'home.story.caption3': 'ទាអាំងដែលរៀបចំសម្រាប់លក់រាយ និងសេវាអាហារ',

        'farm.kicker': 'កសិដ្ឋានរបស់យើង',
        'farm.title':
            'បង្កើតឡើងសម្រាប់គុណភាព ស្ថិរភាព និងការរីកចម្រើនប្រកបដោយទំនួលខុសត្រូវ។',
        'farm.subtitle':
            'យើងរួមបញ្ចូលបទពិសោធន៍ជាក់ស្តែង ជាមួយអនាម័យទំនើប ដំណើរការច្បាស់លាស់ និងស្តង់ដារវេចខ្ចប់ទុកចិត្តបាន សម្រាប់ទាំងអតិថិជនអាហារ និងកសិកម្ម។',
        'farm.imageAlt': 'រូបថតពិតកសិដ្ឋានទា និងទានៅតំបន់វាល',
        'farm.sceneKicker': 'ទិដ្ឋភាពកសិដ្ឋានកម្ពុជា',
        'farm.sceneTitle': 'រចនាបថកសិកម្មក្នុងស្រុក ផលិតកម្មមានវិជ្ជាជីវៈ',
        'farm.sceneDesc':
            'ផ្នែកនេះបង្ហាញប្រតិបត្តិការកសិដ្ឋានបែបកម្ពុជា ដែលគ្រប់គ្រងផលិតផលអាហារ និងជី Duck Droppings Herb តាមខ្សែផ្គត់ផ្គង់តែមួយដែលទុកចិត្តបាន។',
        'farm.practice.ponds.title': 'អាងទឹកបើកចំហមានសុខភាពល្អ',
        'farm.practice.ponds.desc':
            'ទាត្រូវបានប្តូរតំបន់អាងទឹកជាប្រចាំ ដើម្បីរក្សាចលនា និងបន្ថយស្ត្រេស។',
        'farm.practice.traceability.title': 'តាមដានតាមបាច់ផលិត',
        'farm.practice.traceability.desc':
            'ថាសស៊ុត និងកញ្ចប់សាច់ទាំងអស់ មានកាលបរិច្ឆេទ និងកូដបាច់ផលិតច្បាស់។',
        'farm.practice.feed.title': 'គ្រប់គ្រងគុណភាពចំណី',
        'farm.practice.feed.desc':
            'ត្រួតពិនិត្យសមាសភាពចំណីជារៀងរាល់សប្តាហ៍ សម្រាប់កំណើនមានស្ថិរភាព។',
        'farm.practice.reuse.title': 'ប្រើប្រាស់កាកសំណល់ឡើងវិញដោយទំនួលខុសត្រូវ',
        'farm.practice.reuse.desc':
            'កាកសំណល់សរីរាង្គត្រូវបានកែច្នៃទៅជាជី Duck Droppings Herb សម្រាប់កសិដ្ឋាន។',
        'farm.routine.kicker': 'កាលវិភាគប្រចាំថ្ងៃ',
        'farm.routine.title': 'ដំណើរការប្រចាំថ្ងៃ',
        'farm.routine.cta': 'កក់ពេលបញ្ជាទិញ',
        'farm.routine.step1.time': '05:30 ព្រឹក',
        'farm.routine.step1.task': 'ប្រមូលស៊ុត និងចាត់ថ្នាក់ដំបូង',
        'farm.routine.step2.time': '08:00 ព្រឹក',
        'farm.routine.step2.task': 'ពិនិត្យសុខភាពកសិដ្ឋាន និងវដ្តចំណី',
        'farm.routine.step3.time': '11:30 ថ្ងៃត្រង់',
        'farm.routine.step3.task': 'រៀបចំផលិតផលសម្រាប់ការបញ្ជាទិញអនឡាញ',
        'farm.routine.step4.time': '03:00 រសៀល',
        'farm.routine.step4.task': 'អាំង វេចខ្ចប់ និងចែកចាយ',
        'farm.facts.kicker': 'ព័ត៌មានកសិដ្ឋាន',
        'farm.facts.title': 'ព័ត៌មានប្រតិបត្តិការដែលអតិថិជនតែងសួរ',
        'farm.facts.item1.label': 'វដ្តប្រមូលផល',
        'farm.facts.item1.value':
            'ប្រមូលនៅពេលព្រឹករៀងរាល់ថ្ងៃ និងចាត់ថ្នាក់ក្នុងថ្ងៃតែមួយ សម្រាប់ស៊ុត និងស្តុកស្រស់។',
        'farm.facts.item2.label': 'ការវេចខ្ចប់',
        'farm.facts.item2.value':
            'មានជាថាស កញ្ចប់បិតខ្យល់ ទាអាំងមូល និងជាបាវ 25kg ឬ 50kg។',
        'farm.facts.item3.label': 'ប្រភេទអតិថិជន',
        'farm.facts.item3.value':
            'គ្រួសារ តូបអាហារ ភោជនីយដ្ឋាន អ្នកលក់បន្ត និងអ្នកដាំដុះ។',
        'farm.facts.item4.label': 'ពេលឆ្លើយតប',
        'farm.facts.item4.value':
            'គាំទ្រតាមទូរស័ព្ទ និងតេឡេក្រាម ក្នុងម៉ោងធ្វើការ សម្រាប់ការបញ្ជាក់រហ័ស។',
        'farm.gallery.kicker': 'បរិយាកាសការងារពិត',
        'farm.gallery.title': 'មើលបរិយាកាសជុំវិញកសិដ្ឋានបន្ថែម',
        'farm.gallery.desc':
            'រូបភាពទាំងនេះបង្ហាញពីបរិយាកាសនៅពីក្រោយអាជីវកម្ម៖ ទីធ្លាបើកចំហ ផ្លូវចូលអនុវត្តបាន និងការត្រៀមផ្គត់ផ្គង់ដោយផ្ទាល់។',
        'farm.gallery.caption1': 'បរិយាកាសវាលចិញ្ចឹមទាបើកចំហ',
        'farm.gallery.caption2': 'ផ្លូវជនបទក្បែរកសិដ្ឋាន',

        'products.kicker': 'ផលិតផលទា',
        'products.title':
            'ស៊ុត សាច់ ទាអាំង និងជីជាបាវ សម្រាប់តម្រូវការប្រចាំថ្ងៃ។',
        'products.subtitle':
            'ជ្រើសរើសទាំងលក់រាយ និងលក់ដុំ ដោយមានស្លាកបាច់ផលិតច្បាស់ គុណភាពស្ថិរភាព និងវេចខ្ចប់ងាយស្រួល។',
        'products.new.kicker': 'ប្រភេទថ្មី',
        'products.new.title': 'Duck Droppings Herb មានលក់ជាបាវ',
        'products.new.desc':
            'មានជាបាវ 25kg និង 50kg សម្រាប់សួនច្បារ អ្នកដាំដុះ និងដៃគូកសិកម្មដែលត្រូវការជីជាតិបន្ថែមសម្រាប់ដំណាំ។',
        'products.imageAlt': 'រូបថតពិតផលិតផលទាអាំង',
        'products.item.eggs.category': 'ស៊ុត',
        'products.item.eggs.name': 'ស៊ុតទាស្រស់',
        'products.item.eggs.desc':
            'ស៊ុតបានសម្អាត និងចាត់ថ្នាក់ មានពណ៌លឿងស្រស់ សមស្របសម្រាប់គេហដ្ឋាន និងអាជីវកម្ម។',
        'products.item.eggs.packaging': 'ថាស 30 គ្រាប់ / ប្រអប់បរិមាណធំ',
        'products.item.eggs.price': '$4.80 - $5.60 / ថាស',
        'products.item.meat.category': 'សាច់',
        'products.item.meat.name': 'សាច់ទាគុណភាពខ្ពស់',
        'products.item.meat.desc':
            'មានជម្រើសសាច់ទាច្រើនប្រភេទ ជាមួយការគ្រប់គ្រងខ្សែត្រជាក់យ៉ាងតឹងរឹង។',
        'products.item.meat.packaging': 'កញ្ចប់បិតខ្យល់ 1kg / ទាមូលតាមទម្ងន់',
        'products.item.meat.price': '$7.50 - $11.20 / គីឡូក្រាម',
        'products.item.roasted.category': 'ទាអាំង',
        'products.item.roasted.name': 'ទាអាំងរបស់ហាង',
        'products.item.roasted.desc':
            'ទាអាំងជាមួយទឹកជ្រលក់ឆ្ងាញ់ រួចរាល់សម្រាប់បម្រើ ឬយកត្រឡប់។',
        'products.item.roasted.packaging': 'ទាអាំងមូល / កាត់ពាក់កណ្តាល',
        'products.item.roasted.price': '$16.00 - $24.00 / ក្បាល',
        'products.item.herb.category': 'ជី',
        'products.item.herb.name': 'Duck Droppings Herb (បាវ)',
        'products.item.herb.desc':
            'ជីកែច្នៃពីកាកសំណល់ទា សម្រាប់បន្លែ រុក្ខជាតិ និងបង្កើនជីជាតិដី។',
        'products.item.herb.packaging': 'បាវ 25kg / បាវ 50kg',
        'products.item.herb.price': '$6.00 - $10.00 / បាវ',
        'products.why.kicker': 'ហេតុអ្វីអតិថិជនជ្រើសយើង',
        'products.why.title': 'សមស្របសម្រាប់គ្រួសារ និងអាជីវកម្មអាហារ',
        'products.why.cta': 'ទាក់ទងក្រុមលក់',
        'products.why.point1':
            'គ្រប់គ្រងស្តង់ដារអាហារ និងត្រួតពិនិត្យស្រស់ប្រចាំថ្ងៃ។',
        'products.why.point2': 'មានស្តុកស្ថិរភាពសម្រាប់អតិថិជនប្រចាំ។',
        'products.why.point3': 'តម្លៃលក់ដុំច្បាស់លាស់សម្រាប់បរិមាណធំ។',
        'products.why.point4': 'គាំទ្រផ្ទាល់តាមទូរស័ព្ទ អ៊ីមែល និងទម្រង់អនឡាញ។',
        'products.notes.kicker': 'ព័ត៌មានបញ្ជាទិញ',
        'products.notes.title': 'ព័ត៌មានបន្ថែមមុនពេលអ្នកបញ្ជាទិញ',
        'products.notes.point1.title': 'លក់រាយ និងលក់ដុំ',
        'products.notes.point1.desc':
            'គាំទ្រទាំងការបញ្ជាទិញតូចសម្រាប់គ្រួសារ និងការបញ្ជាទិញធំសម្រាប់អាជីវកម្ម ដោយមានតម្លៃច្បាស់ និងការវេចខ្ចប់សមស្រប។',
        'products.notes.point2.title': 'យកដោយផ្ទាល់ និងដឹកជញ្ជូន',
        'products.notes.point2.desc':
            'អតិថិជនអាចមកយកពីកសិដ្ឋាន ឬរៀបចំដឹកជញ្ជូនក្នុងស្រុកសម្រាប់តំបន់ និងកាលវិភាគអាជីវកម្មដែលបានកំណត់។',
        'products.notes.point3.title': 'ការគ្រប់គ្រងផលិតផល',
        'products.notes.point3.desc':
            'ស៊ុតត្រូវបានចាត់ថ្នាក់ សាច់ត្រូវបានវេចខ្ចប់យ៉ាងប្រុងប្រយ័ត្ន ទាអាំងរួចរាល់សម្រាប់បម្រើ ហើយជីជាបាវត្រូវបានរៀបចំសម្រាប់ដឹកជញ្ជូន។',
        'products.notes.caption1': 'ទាអាំងដែលរៀបចំសម្រាប់លក់',
        'products.notes.caption2': 'បរិយាកាសជនបទនៅពីក្រោយខ្សែផលិតផល',

        'order.kicker': 'បញ្ជាទិញអនឡាញ',
        'order.title': 'បញ្ជាទិញផលិតផលទារបស់អ្នកក្នុងរយៈពេលប៉ុន្មាននាទី។',
        'order.subtitle':
            'លំហូរការបញ្ជាទិញមានវិជ្ជាជីវៈ សម្រាប់គ្រួសារ និងអាជីវកម្ម។ អាចភ្ជាប់ទៅប្រព័ន្ធ backend សម្រាប់ផ្ទៀងផ្ទាត់ និងដំណើរការបញ្ជាទិញបាន។',
        'order.step1.title': '1. ជ្រើសរើសផលិតផល',
        'order.step1.desc':
            'ជ្រើសស៊ុត សាច់ ទាអាំង ឬ Duck Droppings Herb ជាបាវ។',
        'order.step2.title': '2. ជ្រើសវិធីទទួលទំនិញ',
        'order.step2.desc': 'យកពីកសិដ្ឋាន ឬដឹកជញ្ជូនតាមពេលវេលាដែលអ្នកចង់បាន។',
        'order.step3.title': '3. បញ្ជាក់យ៉ាងរហ័ស',
        'order.step3.desc':
            'បញ្ចូលព័ត៌មានទំនាក់ទំនង ហើយយើងនឹងបញ្ជាក់ស្តុក កាលវិភាគ និងតម្លៃសរុប។',
        'order.form.title': 'ទម្រង់បញ្ជាទិញ (គំរូ)',
        'order.form.subtitle':
            'បំពេញព័ត៌មានឲ្យច្បាស់ ដើម្បីប្រមូលទិន្នន័យបញ្ជាទិញបានពេញលេញ។',
        'order.form.name': 'ឈ្មោះពេញ',
        'order.form.namePlaceholder': 'សុភា ស្រី',
        'order.form.phone': 'លេខទូរស័ព្ទ',
        'order.form.phonePlaceholder': '+855 69 866 032',
        'order.form.productType': 'ប្រភេទផលិតផល',
        'order.form.productOption1': 'ស៊ុតទាស្រស់',
        'order.form.productOption2': 'សាច់ទា',
        'order.form.productOption3': 'ទាអាំង',
        'order.form.productOption4': 'Duck Droppings Herb (បាវ)',
        'order.form.quantity': 'បរិមាណ',
        'order.form.quantityPlaceholder':
            '2 ថាស / 5 គីឡូក្រាម / 1 ក្បាល / 1 បាវ',
        'order.form.notes': 'កំណត់ចំណាំដឹកជញ្ជូន',
        'order.form.notesPlaceholder': 'ពេលដឹកជញ្ជូន ទីតាំងសម្គាល់ ឬសំណើពិសេស',
        'order.form.submit': 'បញ្ជូនការបញ្ជាទិញ (គំរូ)',

        'contact.kicker': 'ទំនាក់ទំនង / ទីតាំង',
        'contact.title': 'មកកាន់កសិដ្ឋាន ឬទាក់ទងយើងសម្រាប់ការបញ្ជាទិញផ្ទាល់។',
        'contact.subtitle':
            'ទាក់ទងក្រុមលក់បានរហ័ស ស្វែងរកផ្លូវ និងកំណត់ពេលយកទំនិញ។',
        'contact.card.phone.title': 'ទូរស័ព្ទ / តេឡេក្រាម',
        'contact.card.phone.value': '+855 69 866 032, 095855474',
        'contact.card.phone.desc':
            'ហៅទូរស័ព្ទ ឬផ្ញើសារ សម្រាប់បញ្ជាក់ការបញ្ជាទិញ និងដឹកជញ្ជូន។',
        'contact.card.email.title': 'អ៊ីមែល',
        'contact.card.email.value': 'vanthorngthai31@gmail.com',
        'contact.card.email.desc': 'សម្រាប់សំណើលក់ដុំ ឬភោជនីយដ្ឋាន។',
        'contact.card.address.title': 'អាសយដ្ឋានកសិដ្ឋាន',
        'contact.card.address.value': 'បើកក្នុង Google Maps',
        'contact.card.address.desc': 'ចុចមើលទីតាំងពិត និងផ្លូវធ្វើដំណើរ។',
        'contact.location.title': 'ទីតាំងកសិដ្ឋាន',
        'contact.location.label': 'អាសយដ្ឋានកសិដ្ឋាន :',
        'contact.location.button': 'បើកទីតាំងកសិដ្ឋានក្នុង Google Maps',
        'contact.location.imageAlt': 'រូបថតពិតទេសភាពកសិដ្ឋាននៅជនបទកម្ពុជា',
        'contact.location.photoAlt1':
            'រូបភាពពិតតំបន់ជនបទកម្ពុជា ក្បែរទីតាំងកសិដ្ឋានទា',
        'contact.location.photoAlt2':
            'រូបភាពពិតទិដ្ឋភាពផ្លូវចូលកសិដ្ឋាននៅជនបទកម្ពុជា',
        'contact.location.photoCaption1':
            'រូបភាពពិតនៅជនបទកម្ពុជា ក្បែរផ្លូវចូលតំបន់កសិដ្ឋាន។',
        'contact.location.photoCaption2':
            'រូបភាពពិតបរិយាកាសជនបទកម្ពុជា ជុំវិញតំបន់កសិកម្ម។',
        'contact.location.access.title': 'ព័ត៌មានផ្លូវចូល',
        'contact.location.access.note1':
            'សូមប្រើតំណ Google Maps ខាងលើ ដើម្បីទៅដល់បានលឿនជាងគេ។',
        'contact.location.access.note2':
            'ម៉ូតូ តុកតុក រថយន្ត និងរថយន្តតូច អាចចូលដល់ផ្លូវកសិដ្ឋានបាន។',
        'contact.location.access.note3':
            'សូមទូរស័ព្ទមុនមកដល់ 20-30 នាទី ដើម្បីរៀបចំទទួលទំនិញឲ្យរហ័ស។',
        'contact.location.feature.pickup.label': 'យកពីកសិដ្ឋាន',
        'contact.location.feature.pickup.value': 'មានពេលទទួលទំនិញរៀងរាល់ថ្ងៃ',
        'contact.location.feature.delivery.label': 'តំបន់ដឹកជញ្ជូន',
        'contact.location.feature.delivery.value':
            'ភ្នំពេញ និងស្រុកក្បែរខាងដែលបានកំណត់',
        'contact.location.feature.support.label': 'គាំទ្រការលក់',
        'contact.location.feature.support.value':
            'ទូរស័ព្ទ តេឡេក្រាម និងអ៊ីមែល',
        'contact.location.realPhotoNote':
            'រូបភាពយោងគឺជាទិដ្ឋភាពពិតនៅជនបទកម្ពុជា ដើម្បីបង្ហាញបរិយាកាសកសិដ្ឋានជាក់ស្តែង។',
        'contact.hours.title': 'ម៉ោងធ្វើការ',
        'contact.hours.day1': 'ចន្ទ - សុក្រ',
        'contact.hours.day2': 'សៅរ៍',
        'contact.hours.day3': 'អាទិត្យ',
        'contact.hours.time1': '06:00 ព្រឹក - 06:00 ល្ងាច',
        'contact.hours.time2': '06:30 ព្រឹក - 05:00 ល្ងាច',
        'contact.hours.time3': '08:00 ព្រឹក - 12:00 ថ្ងៃត្រង់',
        'contact.hours.visitHint':
            'ដើម្បីទទួលសេវារហ័ស សូមជូនដំណឹងម៉ោងមកដល់មុនពេលធ្វើដំណើរ។',
        'contact.hours.cta': 'បន្តទៅបញ្ជាទិញអនឡាញ',
    },
};
