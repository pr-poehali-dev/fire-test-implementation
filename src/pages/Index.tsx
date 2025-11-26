import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: "Титульный слайд",
    content: (
      <div className="text-center space-y-8 py-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-primary">ООО «НПО Спектрон»</h1>
          <h2 className="text-3xl font-semibold">Порядок проведения контрольных огневых испытаний ИПП</h2>
          <p className="text-xl text-muted-foreground">Внедрение нового процесса</p>
        </div>
        <Separator className="my-8" />
        <div className="space-y-2 text-lg">
          <p><strong>Дата проведения:</strong> До 12.12.2025</p>
          <p><strong>Ответственный:</strong> Казионова А.Е., руководитель ОТК</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Цели обучения",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary mb-6">Цели обучения</h2>
        <div className="space-y-4">
          {[
            "Обеспечить четкое понимание и единообразие выполнения регламента по огневым испытаниям ИПП.",
            "Разъяснить роли и зоны ответственности каждого подразделения в процессе.",
            "Минимизировать риски срыва отгрузок из-за невыявленных несоответствий."
          ].map((goal, index) => (
            <Card key={index} className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-lg">{goal}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Ключевые участники процесса",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary mb-6">Ключевые участники процесса</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["ОТК", "НИЛ", "Склад ГП / Сборочный цех", "Руководители (КО, СЦ, ГЭ)", "Отдел продаж"].map((dept, index) => (
            <div key={index} className="flex items-center">
              <Badge variant="secondary" className="text-base py-3 px-6">{dept}</Badge>
              {index < 4 && <Icon name="ArrowRight" className="mx-2 text-muted-foreground" />}
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {[
            { dept: "ОТК", role: "Инициация, отбор, регистрация, контроль" },
            { dept: "НИЛ", role: "Проведение испытаний, протоколирование" },
            { dept: "СЦ/Склад ГП", role: "Предоставление/отгрузка продукции" },
            { dept: "Руководители (КО, СЦ, ГЭ)", role: "Анализ причин и устранение несоответствий" },
            { dept: "Отдел продаж", role: "Информирование клиентов" }
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{item.dept}</CardTitle>
                <CardDescription className="text-base">{item.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Для Бригадиров и Мастера СЦ",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="default" className="text-lg py-2 px-4">БЛОК 1</Badge>
          <h2 className="text-3xl font-bold text-primary">Для Бригадиров и Мастера СЦ</h2>
        </div>
        <Card className="border-2 border-accent">
          <CardHeader>
            <CardTitle className="text-2xl">Ваша роль: Предоставление приборов</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Суть:</h3>
              <p className="text-base">По запросу контролера ОТК необходимо обеспечить предоставление собранных приборов для отбора на огневые испытания.</p>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="AlertCircle" className="text-accent" />
                Ключевое сообщение:
              </h3>
              <p className="text-base">Это обязательный этап перед отгрузкой. Ваша оперативность напрямую влияет на общий цикл контроля качества и выполнение плана отгрузок.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 5,
    title: "Отбор образцов (ОТК)",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="default" className="text-lg py-2 px-4">БЛОК 2</Badge>
          <h2 className="text-3xl font-bold text-primary">Для Контролеров ОТК и Сотрудников НИЛ</h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Отбор образцов (ОТК)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Кто:</h3>
                <p>Контролер ОТК сборочного участка</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Когда:</h3>
                <p>Еженедельно, для плановых испытаний каждый четверг</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Как:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Отобрать 6 приборов от каждой подгруппы (согласно Приложению А Методики)</li>
                <li>Отбор производится после проведения технологического прогона или ПСИ</li>
                <li>Разместить на специальном стеллаже, маркированном «На испытания»</li>
              </ul>
            </div>
            <div className="bg-destructive/10 border-2 border-destructive p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Icon name="AlertTriangle" className="text-destructive" />
                Лимит (Важно!):
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Не более 30 шт. оболочки ИЛИ</li>
                <li>Не более 60 шт. промышленных извещателей ИЛИ</li>
                <li>Не более 30 шт. промышленных и 12 шт. оболочки</li>
                <li className="font-semibold">Превышение лимита — только по предварительному согласованию с НИЛ!</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 6,
    title: "Регистрация в Журнале (ОТК)",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Регистрация в Журнале (ОТК)</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Что:</h3>
                <p>«Журнал огневых испытаний ИПП» (Приложение Б Методики)</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Когда:</h3>
                <p>В день передачи приборов на испытания</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Что заполняет ОТК:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Дата отбора</li>
                <li>№ подгруппы</li>
                <li>Наименование ИПП</li>
                <li>Заводской номер (при наличии)</li>
              </ul>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Пример из журнала:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="border border-border p-2">№ п/п</th>
                      <th className="border border-border p-2">Дата отбора</th>
                      <th className="border border-border p-2">№ подгруппы</th>
                      <th className="border border-border p-2">Наименование ИПП</th>
                      <th className="border border-border p-2">Заводской номер</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2 text-center">1</td>
                      <td className="border border-border p-2 text-center">13.11.2025</td>
                      <td className="border border-border p-2 text-center">1/3</td>
                      <td className="border border-border p-2">Спектрон-601-Н</td>
                      <td className="border border-border p-2 text-center">б/н</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 7,
    title: "Передача и проведение испытаний (НИЛ)",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Передача и проведение испытаний (НИЛ)</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Кто:</h3>
                <p>Сотрудник НИЛ</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Когда:</h3>
                <p>Забрать образцы со стеллажа до 10:00 каждый четверг</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Действие:</h3>
              <p>Поставить отметку «Принято НИЛ» в журнале</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Испытания:</h3>
              <p>Провести испытания в строгом соответствии с разделами 4-8 Методики и заполнить протокол</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 8,
    title: "Возврат и фиксация результатов",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Возврат и фиксация результатов (НИЛ и ОТК)</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">НИЛ после испытаний:</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Заполняет «Журнал огневых испытаний» (номера протоколов, результаты «положительный/отрицательный»)</li>
                <li>Передает приборы и журнал контролеру ОТК</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">ОТК после испытаний:</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Производит визуальный осмотр приборов на отсутствие повреждений</li>
                <li>Ставит соответствующую отметку в журнале</li>
              </ol>
            </CardContent>
          </Card>
          <Card className="border-2 border-destructive bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Icon name="Clock" className="text-destructive" />
                КРИТИЧЕСКИ ВАЖНЫЙ СРОК ДЛЯ НИЛ:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Скан-копия протоколов испытаний должна быть предоставлена не позднее 10:00 следующего дня.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Действия при отрицательных результатах",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="default" className="text-lg py-2 px-4">БЛОК 3</Badge>
          <h2 className="text-3xl font-bold text-primary">Для Руководителей (КО, Склада ГП, ГЭ)</h2>
        </div>
        <Card className="border-2 border-destructive">
          <CardHeader>
            <CardTitle className="text-2xl">Действия при отрицательных результатах</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Триггер:</h3>
              <p>Получение от НИЛ электронного письма с отрицательным протоколом испытаний</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="otk">
                <AccordionTrigger className="text-lg font-semibold">Руководитель ОТК</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Немедленно приостанавливает отгрузку всей партии</li>
                    <li>Рассылает Служебную записку (СЗ, Приложение В) всем заинтересованным руководителям</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ko">
                <AccordionTrigger className="text-lg font-semibold">Руководитель КО</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>В течение 1 рабочего дня устанавливает причину несоответствия</li>
                    <li>Разрабатывает и предоставляет план мероприятий по устранению</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sc">
                <AccordionTrigger className="text-lg font-semibold">Руководитель СЦ</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Останавливает производство данной партии/серии</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="warehouse">
                <AccordionTrigger className="text-lg font-semibold">Начальник склада ГП</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Останавливает отгрузку партии</li>
                    <li>В течение 1 часа сообщает количество приборов данной серии на складе</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 10,
    title: "Информирование о «СТОП-производстве»",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="default" className="text-lg py-2 px-4">БЛОК 4</Badge>
          <h2 className="text-3xl font-bold text-primary">Для Менеджеров и Руководителя склада ГП</h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Информирование о «СТОП-производстве»</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-destructive/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Суть:</h3>
              <p>При отрицательных результатах огневых испытаний отгрузка и производство приостанавливаются до выяснения причин и устранения несоответствий.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Ваша роль:</h3>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>Получить уведомление от Руководителя ОТК (через СЗ и email)</li>
                <li>Быть в курсе ситуации и, при необходимости, проинформировать заказчиков о возможной задержке</li>
                <li>Контролировать возобновление отгрузок только после получения официального уведомления от Руководителя ОТК о положительных результатах повторных испытаний</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 11,
    title: "Зоны ответственности",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Зоны ответственности</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-secondary">
                <th className="border border-border p-4 text-left">Роль</th>
                <th className="border border-border p-4 text-left">Основная ответственность</th>
              </tr>
            </thead>
            <tbody>
              {[
                { role: "Контролер ОТК", resp: "Своевременный отбор, регистрация, визуальный контроль" },
                { role: "Сотрудник НИЛ", resp: "Корректное проведение испытаний, протоколы, сроки" },
                { role: "Руководитель ОТК", resp: "Контроль процесса, инициация СТОП/ПУСК, информирование" },
                { role: "Руководитель КО", resp: "Анализ причин брака, разработка корректирующих действий" },
                { role: "Бригадир/Мастер СЦ", resp: "Предоставление приборов по запросу ОТК" }
              ].map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-muted/50' : ''}>
                  <td className="border border-border p-4 font-semibold">{item.role}</td>
                  <td className="border border-border p-4">{item.resp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground italic">На основе Раздела 10 Методики</p>
      </div>
    )
  },
  {
    id: 12,
    title: "Итоги и аттестация",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary mb-6">Итоги и аттестация</h2>
        <div className="grid gap-4">
          {[
            "Внедрен единый регламент проведения огневых испытаний ИПП",
            "Каждый участник процесса знает свои задачи и зону ответственности",
            "Соблюдение процедуры — залог качества продукции и своевременности отгрузок"
          ].map((item, index) => (
            <Card key={index} className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={24} />
                  <p className="text-lg">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-accent/10 border-2 border-accent">
          <CardContent className="pt-6 text-center space-y-4">
            <p className="text-xl font-semibold">Для проверки знаний будет проведено тестирование</p>
            <Separator />
            <div>
              <p className="text-lg font-semibold mb-2">По всем вопросам обращайтесь:</p>
              <p className="text-lg">Казионова А.Е., руководитель ОТК</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
];

const testQuestions = [
  {
    id: 1,
    question: "Когда необходимо проводить отбор образцов для огневых испытаний?",
    options: [
      "Каждый понедельник",
      "Еженедельно, каждый четверг",
      "Ежедневно",
      "Раз в месяц"
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Сколько приборов отбирается от каждой подгруппы?",
    options: [
      "3 прибора",
      "4 прибора",
      "6 приборов",
      "10 приборов"
    ],
    correct: 2
  },
  {
    id: 3,
    question: "До какого времени НИЛ должен забрать образцы со стеллажа?",
    options: [
      "До 08:00",
      "До 10:00",
      "До 12:00",
      "До 14:00"
    ],
    correct: 1
  },
  {
    id: 4,
    question: "В течение какого времени начальник склада ГП должен сообщить количество приборов на складе при отрицательном результате испытаний?",
    options: [
      "В течение 30 минут",
      "В течение 1 часа",
      "В течение 2 часов",
      "В течение 1 рабочего дня"
    ],
    correct: 1
  },
  {
    id: 5,
    question: "Не позднее какого времени НИЛ должен предоставить скан-копию протоколов испытаний?",
    options: [
      "В день проведения испытаний",
      "Не позднее 10:00 следующего дня",
      "В течение 2 рабочих дней",
      "В течение недели"
    ],
    correct: 1
  },
  {
    id: 6,
    question: "Кто устанавливает причину несоответствия при отрицательных результатах испытаний?",
    options: [
      "Руководитель ОТК",
      "Сотрудник НИЛ",
      "Руководитель КО",
      "Начальник склада ГП"
    ],
    correct: 2
  },
  {
    id: 7,
    question: "Какой максимальный лимит для промышленных извещателей на одно испытание?",
    options: [
      "30 шт.",
      "45 шт.",
      "60 шт.",
      "90 шт."
    ],
    correct: 2
  },
  {
    id: 8,
    question: "Что должен сделать Руководитель ОТК при получении отрицательного протокола испытаний?",
    options: [
      "Проинформировать клиентов",
      "Немедленно приостановить отгрузку всей партии и разослать Служебную записку",
      "Провести повторные испытания",
      "Утилизировать всю партию"
    ],
    correct: 1
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('presentation');
  const [testAnswers, setTestAnswers] = useState<Record<number, number>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleTestSubmit = () => {
    let score = 0;
    testQuestions.forEach((question) => {
      if (testAnswers[question.id] === question.correct) {
        score++;
      }
    });
    setTestScore(score);
    setTestSubmitted(true);
  };

  const handleTestReset = () => {
    setTestAnswers({});
    setTestSubmitted(false);
    setTestScore(0);
  };

  const progressPercentage = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <header className="bg-primary text-primary-foreground py-6 px-8 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">ООО «НПО Спектрон»</h1>
          <p className="text-lg mt-2 opacity-90">Система обучения персонала</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="home" className="text-base">
              <Icon name="Home" className="mr-2" size={18} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="presentation" className="text-base">
              <Icon name="Presentation" className="mr-2" size={18} />
              Презентация
            </TabsTrigger>
            <TabsTrigger value="materials" className="text-base">
              <Icon name="FileText" className="mr-2" size={18} />
              Материалы
            </TabsTrigger>
            <TabsTrigger value="test" className="text-base">
              <Icon name="ClipboardCheck" className="mr-2" size={18} />
              Тестирование
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="animate-fade-in">
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-3xl">Добро пожаловать!</CardTitle>
                  <CardDescription className="text-base">
                    Система обучения по порядку проведения контрольных огневых испытаний ИПП
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg">
                    Данная обучающая система разработана для аттестации сотрудников по новому процессу контрольных огневых испытаний извещателей пожарных пламени (ИПП).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-secondary">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Icon name="Calendar" className="text-accent" />
                          Срок обучения
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg font-semibold">До 12.12.2025</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-secondary">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Icon name="User" className="text-accent" />
                          Ответственный
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg">Казионова А.Е.</p>
                        <p className="text-sm text-muted-foreground">Руководитель ОТК</p>
                      </CardContent>
                    </Card>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Структура обучения:</h3>
                    <div className="grid gap-3">
                      {[
                        { icon: "Presentation", title: "Презентация", desc: "12 информационных слайдов с материалами обучения" },
                        { icon: "FileText", title: "Методические материалы", desc: "Подробная информация по ответственности каждого подразделения" },
                        { icon: "ClipboardCheck", title: "Тестирование", desc: "8 вопросов для проверки усвоенных знаний" }
                      ].map((item, index) => (
                        <Card key={index}>
                          <CardContent className="pt-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                              <Icon name={item.icon as any} size={24} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="presentation" className="animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  Слайд {currentSlide + 1} из {slides.length}
                </h2>
                <Badge variant="secondary" className="text-base py-2 px-4">
                  {slides[currentSlide].title}
                </Badge>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              
              <Card className="min-h-[600px]">
                <CardContent className="pt-8 animate-slide-up">
                  {slides[currentSlide].content}
                </CardContent>
              </Card>

              <div className="flex justify-between items-center">
                <Button
                  onClick={handlePrevSlide}
                  disabled={currentSlide === 0}
                  variant="outline"
                  size="lg"
                >
                  <Icon name="ChevronLeft" className="mr-2" />
                  Назад
                </Button>
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-accent' : 'bg-muted'
                      }`}
                      aria-label={`Перейти к слайду ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  onClick={handleNextSlide}
                  disabled={currentSlide === slides.length - 1}
                  size="lg"
                >
                  Далее
                  <Icon name="ChevronRight" className="ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="materials" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Методические материалы</CardTitle>
                <CardDescription>Подробная информация по каждому блоку</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="block1">
                    <AccordionTrigger className="text-xl font-semibold">
                      БЛОК 1: Для Бригадиров и Мастера СЦ
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 text-base">
                      <p>
                        <strong>Основная задача:</strong> По запросу контролера ОТК обеспечить предоставление собранных приборов для отбора на огневые испытания.
                      </p>
                      <p>
                        <strong>Важность:</strong> Ваша оперативность напрямую влияет на общий цикл контроля качества и выполнение плана отгрузок.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="block2">
                    <AccordionTrigger className="text-xl font-semibold">
                      БЛОК 2: Для Контролеров ОТК и Сотрудников НИЛ
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 text-base">
                      <div>
                        <strong className="text-lg">Контролер ОТК:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>Отбор 6 приборов от каждой подгруппы еженедельно по четвергам</li>
                          <li>Регистрация в журнале огневых испытаний</li>
                          <li>Визуальный осмотр после испытаний</li>
                          <li>Соблюдение лимитов: не более 30 шт. оболочки, 60 шт. промышленных извещателей</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-lg">Сотрудник НИЛ:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>Забор образцов до 10:00 каждый четверг</li>
                          <li>Проведение испытаний согласно разделам 4-8 Методики</li>
                          <li>Предоставление скан-копии протоколов не позднее 10:00 следующего дня</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="block3">
                    <AccordionTrigger className="text-xl font-semibold">
                      БЛОК 3: Для Руководителей (КО, Склада ГП, ГЭ)
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 text-base">
                      <div className="bg-destructive/10 p-4 rounded-lg">
                        <strong>При отрицательных результатах испытаний:</strong>
                      </div>
                      <div>
                        <strong>Руководитель ОТК:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>Немедленная приостановка отгрузки всей партии</li>
                          <li>Рассылка Служебной записки всем заинтересованным</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Руководитель КО:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>Установление причины несоответствия в течение 1 рабочего дня</li>
                          <li>Разработка плана мероприятий по устранению</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Руководитель СЦ:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>Остановка производства данной партии/серии</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Начальник склада ГП:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>Остановка отгрузки партии</li>
                          <li>Сообщение количества приборов на складе в течение 1 часа</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="block4">
                    <AccordionTrigger className="text-xl font-semibold">
                      БЛОК 4: Для Менеджеров и Руководителя склада ГП
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 text-base">
                      <p>
                        <strong>Основная задача:</strong> Отслеживание статуса «СТОП-производство» и информирование клиентов.
                      </p>
                      <div>
                        <strong>Последовательность действий:</strong>
                        <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
                          <li>Получение уведомления от Руководителя ОТК</li>
                          <li>Информирование заказчиков о возможной задержке</li>
                          <li>Контроль возобновления отгрузок только после официального уведомления о положительных результатах повторных испытаний</li>
                        </ol>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="test" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Тестирование знаний</CardTitle>
                <CardDescription>Ответьте на вопросы для проверки усвоенного материала</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {!testSubmitted ? (
                  <>
                    {testQuestions.map((question, qIndex) => (
                      <Card key={question.id} className="border-2">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Вопрос {qIndex + 1}. {question.question}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <RadioGroup
                            value={testAnswers[question.id]?.toString()}
                            onValueChange={(value) => {
                              setTestAnswers({
                                ...testAnswers,
                                [question.id]: parseInt(value)
                              });
                            }}
                          >
                            {question.options.map((option, oIndex) => (
                              <div key={oIndex} className="flex items-center space-x-2 mb-3">
                                <RadioGroupItem value={oIndex.toString()} id={`q${question.id}-o${oIndex}`} />
                                <Label htmlFor={`q${question.id}-o${oIndex}`} className="text-base cursor-pointer">
                                  {option}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </CardContent>
                      </Card>
                    ))}
                    <div className="flex justify-center">
                      <Button
                        onClick={handleTestSubmit}
                        size="lg"
                        disabled={Object.keys(testAnswers).length !== testQuestions.length}
                        className="px-12"
                      >
                        <Icon name="Send" className="mr-2" />
                        Отправить результаты
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <Card className={`border-2 ${testScore >= 6 ? 'border-green-500 bg-green-50' : 'border-destructive bg-destructive/5'}`}>
                      <CardHeader>
                        <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
                          {testScore >= 6 ? (
                            <>
                              <Icon name="CheckCircle2" className="text-green-600" size={36} />
                              Тест пройден!
                            </>
                          ) : (
                            <>
                              <Icon name="XCircle" className="text-destructive" size={36} />
                              Тест не пройден
                            </>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center space-y-4">
                        <div className="text-6xl font-bold">
                          {testScore} / {testQuestions.length}
                        </div>
                        <p className="text-xl">
                          {testScore >= 6
                            ? 'Поздравляем! Вы успешно прошли аттестацию.'
                            : 'К сожалению, вам необходимо повторно изучить материалы и пройти тест.'}
                        </p>
                        <Progress value={(testScore / testQuestions.length) * 100} className="h-3" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Разбор ответов:</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {testQuestions.map((question, qIndex) => {
                          const userAnswer = testAnswers[question.id];
                          const isCorrect = userAnswer === question.correct;
                          return (
                            <div key={question.id} className={`p-4 rounded-lg border-2 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-destructive bg-destructive/5'}`}>
                              <div className="flex items-start gap-3 mb-2">
                                {isCorrect ? (
                                  <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" />
                                ) : (
                                  <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" />
                                )}
                                <div className="flex-1">
                                  <p className="font-semibold mb-2">Вопрос {qIndex + 1}: {question.question}</p>
                                  <p className="text-sm">
                                    <strong>Ваш ответ:</strong> {question.options[userAnswer]}
                                  </p>
                                  {!isCorrect && (
                                    <p className="text-sm text-green-700 mt-1">
                                      <strong>Правильный ответ:</strong> {question.options[question.correct]}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </CardContent>
                    </Card>

                    <div className="flex justify-center">
                      <Button onClick={handleTestReset} size="lg" variant="outline" className="px-12">
                        <Icon name="RotateCcw" className="mr-2" />
                        Пройти тест заново
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-primary text-primary-foreground py-6 px-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg">ООО «НПО Спектрон» — Система обучения персонала</p>
          <p className="text-sm opacity-80 mt-2">
            По всем вопросам обращайтесь: Казионова А.Е., руководитель ОТК
          </p>
        </div>
      </footer>
    </div>
  );
}
