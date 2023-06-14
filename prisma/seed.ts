import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const spectacle = await prisma.spectacle.createMany({
    data: [
      {
        id: "auntie-for-a-million",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/spectacles/auntie-for-a-million.webp",
        title: "Тітонька на мільйон",
        author: "Брендон Томас",
        type: "комедія в стилі рок-н-рол",
        duration: "1 год 30 хв",
        description:
          "Англійський гумор – річ, яка погано піддається перекладу, часто обурлива, інколи на межі здорового глузду. В британських комедіях майже немає заборонених тем. Смерть, потворність, релігія, королева, твоя власна персона – будь-яка тема годиться, аби було кумедно.",
      },
      {
        id: "betray-me",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/spectacles/betray-me.webp",
        title: "Зрадь мене",
        author: "Володимир Винниченко",
        type: "дикий експеримент над любов’ю на 2 дії",
        duration: "2 год",
        description:
          "Драматургія Володимира Винниченка вирізняється роздумами над вічними проблемами буття, зради, моралі. Ця п’єса дозволяє переосмислити і задуматися над своїм ставленням до сім’ї, коханої чи коханого, особливо у ті хвилини життя, коли на терезах сімейного щастя постає вибір, – як зберегти своє кохання і не втратити сім’ю.",
      },
      {
        id: "gabriel",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/spectacles/gabriel.webp",
        title: "Габріель",
        author: "Мішель Лоранс",
        type: "комедія",
        duration: "1 год 30 хв",
        description:
          "Історія за п’єсою французької драматургині Мішель Лоранс. Франція, Париж і чотири жіночі долі на перехресті століття. Століття, яке в цей день святкує Габі. На ювілей зійшлися її дочка Марель, онука Ніна та правнучка Фостін – хвилююче танго чотирьох поколінь.",
      },
      {
        id: "night-on-the-mountain-pasture",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/spectacles/night-on-the-mountain-pasture.webp",
        title: "Ніч на полонині",
        author: "Олександр Олесь",
        type: "драматична поема",
        duration: "2 год",
        description:
          "Карпатські праліси та гори – місце дійства казкового марева. Коли вечірня роса вже впала на ожини і сови, що ночують на старих кладовищах, збираються на полювання — ніч починає заступати гори. Час сповільнює свій темп, здається, навіть гірські річки течуть спокійніше, а пастухи, дрімаючи біля ватри, слухають оповідання старих про чугайстрів, що нападають на худобу. Отоді в Карпатах починається найцікавіше.",
      },
      {
        id: "journeys-with-an-angel",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/spectacles/journeys-with-an-angel.webp",
        title: "Подорожі з ангелом",
        author: "Петро Гладилін",
        type: "драма-притча на 2 дії",
        duration: "2 год",
        description:
          "Театр ставить завдання нагадати людям про любов до ближнього, яка, як правило, все частіше у зв’язку з розвитком цивілізації, комфорту життя, а також матеріального достатку в житті людей стає дефіцитом, тому що люди часто настільки захоплюються власним збагаченням, що інколи не помічають тих, хто поруч, кому потрібна їх увага, любов і допомога.",
      },
      {
        id: "weekend-for-three",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/spectacles/weekend-for-three.webp",
        title: "Вікенд на трьох",
        author: "Жан Пуаре",
        type: "комедія на 2 дії",
        duration: "2 год",
        description:
          "За жанром “Вікенд на трьох” — класична і не вигадлива комедія положень. За сюжетом успішний бізнесмен Стефан, який зобов’язаний своїм благополуччям вдалому одруженню, зустрічає в ресторані юну Жюлі. Краса та молодість дівчини справляють на Стефана таке враження, що він зважується на першу за п’ятнадцять років подружнього життя зраду.",
      },
    ],
  });
  console.log(spectacle);

  const event = await prisma.event.createMany({
    data: [
      {
        beginningAt: new Date("2020-11-23T17:00:00+03:00"),
        spectacleId: "auntie-for-a-million",
      },
      {
        beginningAt: new Date("2021-01-18T19:00:00+03:00"),
        spectacleId: "gabriel",
      },
      {
        beginningAt: new Date("2021-01-19T19:00:00+03:00"),
        spectacleId: "night-on-the-mountain-pasture",
      },
      {
        beginningAt: new Date("2021-01-20T18:00:00+03:00"),
        spectacleId: "gabriel",
      },
      {
        beginningAt: new Date("2021-01-20T20:00:00+03:00"),
        spectacleId: "weekend-for-three",
      },
    ],
  });
  console.log(event);

  const worker = await prisma.worker.createMany({
    data: [
      {
        id: "andrij-ciganok",
        name: "Андрій Циганок",
        position: "Артист драми",
        department: "actors",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/workers/andrij-ciganok.webp",
        bio: "Народився у м. Покров Дніпропетровської області.  1981-го року закінчив Київський державний інститут театрального мистецтва імені І.К.Карпенка-Карого (курс професора, народної артистки України В.І.Зимньої) за спеціальністю «Актор драматичного театру і кіно».  Від 1981-го року до 1990-го року працював артистом драми Чернівецького обласного українського музично-драматичного театру імені О. Кобилянської.  Від 1991-го року до 1994-го року – викладач курсу «Культура мови» у навчальних закладах м. Чернівці.  Від 1995-го року працював викладачем майстерності актора в Чернівецькому міському фольклорному театрі-студії «Ґердан».  Від 1992-го року до 2016-го року – він артист театру-студії «Духовно-мистецького центру «Голос».  Від 1997-го по 2016-й рік – директор і викладач фахових дисциплін театру-студії «Ґердан».  2008-го року за роботу з творчою молоддю йому присвоєне почесне звання «Заслужений працівник освіти України».  Дипломант Республіканського конкурсу артистів-читців (Київ, 1985р.), лауреат Міжнародного пісенного фестивалю “Доля” (м. Чернівці, 1993р.), Всеукраїнського фестивалю-конкурсу національно-патріотичної пісні і поезії “Воля” в номінаціях “Пісня”, “Театр” (м. Івано-Франківськ, 1997р.).  Нагороджений Почесною грамотою Міністерства культури СРСР (1990р.), Міністерства освіти і науки України (1995, 2007р.р.), Міністерства культури України (2015р.), грамотами Чернівецької обласної державної адміністрації та Чернівецької міської ради. За роботу з творчою молоддю нагороджений знаком Міністерства освіти і науки України “Відмінник освіти України” (1996р.). Лауреат премії ім. Ю.Федьковича ЧМР (1998р.), премії ім. О.Поповича ЧОДА (2006р.). Маю почесне звання «Заслужений працівник освіти України» (2008р.).  Від 2017-го року – артист драми Чернівецького академічного обласного українського музично-драматичного театру імені О. Кобилянської.",
      },
      {
        id: "lyudmila-skripka",
        name: "Людмила Скрипка",
        position: "Головний режисер театру",
        department: "artistic",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/workers/lyudmila-skripka.webp",
        bio: "Народилася у м. Києві.  1979-го року закінчила Київський інститут театрального мистецтва імені І. Карпенка-Карого.  У театрі працювала актрисою від 1979-го року до 2008-го року.  1984-го року стала лауреатом республіканської комсомольської премії імені М. Островського за роль Любки у виставі “Запитай колись у трав” Я. Стельмаха.  1985-го року стала переможцем Всесоюзного конкурсу творчої молоді за роль Полінки у виставі “Солдатська вдова” М. Анкілова.  1993-го року стала лауреатом премії фестивалю “Прем’ єри сезону” (за кращу жіночу роль: Соланж – “Служниці” Ж. Жене).  2001-го року вона — дипломант Міжнародного незалежного фестивалю моновистав “Відлуння” за роль Марії у моновиставі “Я чекаю тебе, коханий” Д. Фо, Ф. Раме.  2006-го року удостоєна почесного звання «Заслужений артист України».  2010-го року стала лауреатом обласної літературно-мистецької премії імені Сидора Воробкевича.  2015-го року стала лауреатом обласної літературно-мистецької премії імені Сіді Таль.  2016-го року удостоєна почесного звання «Народний артист України».  2018-го року Людмила Скрипка переведена на посаду головного режисера театру.",
      },
      {
        id: "mikola-gomenyuk",
        name: "Микола Гоменюк",
        position: "Заслужений артист України",
        department: "actors",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/workers/mikola-gomenyuk.webp",
        bio: "Народився у м. Чернівці.  У театрі працює від 1-го березня 2007-го року.  2017-го року удостоєний почесного звання “Заслужений артист України”.",
      },
      {
        id: "viktor-golovko",
        name: "Віктор Головко",
        position: "",
        department: "orchestra",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/workers/viktor-golovko.webp",
        bio: "",
      },
      {
        id: "viktoriya-prihodko",
        name: "Вікторія Приходько",
        position: "",
        department: "Ballet",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/workers/viktoriya-prihodko.webp",
        bio: "",
      },
      {
        id: "volodymyr-shnayder",
        name: "Володимир Шнайдер",
        position: "Головний диригент",
        department: "artistic",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/workers/volodymyr-schneider.webp",
        bio: "Народився у смт. Отинія, Коломийського району, Івано-Франківської області. 2005-го року закінчив Чернівецьке училище мистецтв імені Сидора Воробкевича. 2010-го року закінчив Національну музичну академію імені П.І. Чайковського, м. Київ. У театрі працює від 2010-го року. Окрім диригентської роботи В. Шнайдер створює аранжування концертного репертуару оркестру, та оригінальну музику до вистав.",
      },
    ],
  });
  console.log(worker);

  const post = await prisma.post.createMany({
    data: [
      {
        handle: "modern-theater-in-ukraine",
        publicUrl: "/post/modern-theater-in-ukraine",
        adminUrl: "/admin/post/modern-theater-in-ukraine",
        title: "Modern theater in Ukraine",
        type: "Meeting",
        excerpt: "Who are we? Where are we from? Where are we going? Sergiy Vynnychenko is a theatrical blogger and the author of the website 'Theatrical Fishing'. June 18th, 12:00, theater foyer, 2nd floor. Admission is free.",
        content: "Who are we? Where are we from? Where are we going? Sergiy Vynnychenko is a theatrical blogger and the author of the website 'Theatrical Fishing'. June 18th, 12:00, theater foyer, 2nd floor. Admission is free.",
        published: new Date("2020-10-23T17:00:00+03:00"),
      },
      {
        handle: "see-you-in-the-new-theatrical-season",
        publicUrl: "/post/see-you-in-the-new-theatrical-season",
        adminUrl: "/admin/post/see-you-in-the-new-theatrical-season",
        title: "See you in the new theatrical season",
        type: "Advertisement",
        excerpt: "Dear spectators, see you in the new 91st theater season. For excursion inquiries, please contact us at (0372) 52-46-62.",
        content: "Dear spectators, see you in the new 91st theater season. For excursion inquiries, please contact us at (0372) 52-46-62.",
        published: new Date("2020-11-03T17:00:00+03:00"),
      },
      {
        handle: "theatrical-event-white-bird-of-bukovina",
        publicUrl: "/post/theatrical-event-white-bird-of-bukovina",
        adminUrl: "/admin/post/theatrical-event-white-bird-of-bukovina",
        title: "Theatrical event “White bird of Bukovina”",
        type: "Meeting",
        excerpt: "On June 15th, at 11:00, a theatrical event will take place to celebrate the 80th anniversary of the birth of the renowned Ukrainian filmmaker Ivan Mykolaichuk. The event will be held at the “Theater of the Open Sky” in the museum-estate of the village of Chortoryia. Admission is free.",
        content: "On June 15th, at 11:00, a theatrical event will take place to celebrate the 80th anniversary of the birth of the renowned Ukrainian filmmaker Ivan Mykolaichuk. The event will be held at the “Theater of the Open Sky” in the museum-estate of the village of Chortoryia. Admission is free.",
        published: new Date("2020-11-17T17:00:00+03:00"),
      },
      {
        handle: "cancellation-of-performances-in-october-2022",
        publicUrl: "/post/cancellation-of-performances-in-october-2022",
        adminUrl: "/admin/post/cancellation-of-performances-in-october-2022",
        title: "Cancellation of performances in October 2022",
        type: "Advertisement",
        excerpt: "Dear spectators, we would like to inform you about changes in the repertoire for October 2022. The performances scheduled from October 7th to 10th have been canceled. We apologize for any inconvenience caused and thank you for your understanding.",
        content: "Dear spectators, we would like to inform you about changes in the repertoire for October 2022. The performances scheduled from October 7th to 10th have been canceled. We apologize for any inconvenience caused and thank you for your understanding.",
        published: new Date("2020-11-27T17:00:00+03:00"),
      },
    ],
  });
  console.log(post);

  const vacancy = await prisma.vacancy.createMany({
    data: [
      {
        id: "production-designer",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/vacancy/production-designer.webp",
        title: "Художник-постановник театрально-виконавчого закладу",
        description: "Художник-постановник театрально-виконавчого закладу",
      },
      {
        id: "choirmaster",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/vacancy/choirmaster.webp",
        title: "Хормейстер",
        description: "Хормейстер",
      },
      {
        id: "director-stage-manager",
        imageUrl: "https://hxufkbugxzmalzpeuoxb.supabase.co/storage/v1/object/public/vacancy/director-stage-manager.webp",
        title: "Режисер-постановник",
        description: "Режисер-постановник",
      },
    ],
  });
  console.log(vacancy);

  const adminPage = await prisma.adminPage.createMany({
    data: [
      {
        id: "dashboard",
        title: "Dashboard",
        href: "/admin/dashboard",
      },
      {
        id: "event",
        title: "Events",
        href: "/admin/event/1",
      },
      {
        id: "post",
        title: "Posts",
        href: "/admin/post/modern-theater-in-ukraine",
      },
      {
        id: "spectacle",
        title: "Spectacles",
        href: "/admin/spectacle/gabriel",
      },
      {
        id: "vacancy",
        title: "Vacancies",
        href: "/admin/vacancy/choirmaster",
      },
      {
        id: "worker",
        title: "Workers",
        href: "/admin/worker/andrij-ciganok",
      },
    ],
  });
  console.log(adminPage);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
