import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { Container, Button, Badge } from '@/components/ui'
import { TextReveal } from '@/components/ui/TextReveal'
import { BlurFade } from '@/components/ui/BlurFade'
import Image from 'next/image'

export const metadata: Metadata = generatePageMetadata({
    title: 'Школа бега для взрослых: как начать бегать с нуля | КофеРан вечеринка',
    description: 'Обучение технике бега для взрослых в Симферополе и Крыму. Расскажем, как начать бегать с нуля без травм. Бесплатные тренировки и поддержка сообщества.',
    path: '/school',
    noIndex: true,
})

export default function SchoolPage() {
    return (
        <div className="flex flex-col items-center bg-background-light font-display text-text-main w-full min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full py-16 md:py-24 bg-orange-50/50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex flex-col gap-6 lg:w-1/2">
                            <Badge variant="primary" className="self-start">Для новичков</Badge>
                            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                Как начать бегать с нуля и не бросить?
                            </h1>
                            <p className="text-lg text-text-muted leading-relaxed max-w-xl">
                                Школа бега КофеРан вечеринка — это проект для тех, кто хочет сделать бег частью своей жизни. Мы научим вас правильной технике, поможем подобрать кроссовки и поддержим на каждом километре.
                            </p>
                            <Button href="https://t.me/coffeerunparty" size="lg" external>
                                Начать тренировки бесплатно
                            </Button>
                        </div>
                        <div className="relative lg:w-1/2 aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/Hero_3.webp"
                                alt="Школа бега для взрослых"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Core Training Areas */}
            <section className="py-16 md:py-24 w-full">
                <Container>
                    <div className="flex flex-col gap-12">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl md:text-4xl font-black">Чему мы учим в школе бега?</h2>
                            <p className="text-text-muted text-lg">
                                Наша программа адаптирована для тех, кто никогда не занимался легкой атлетикой профессионально.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Техника бега',
                                    desc: 'Постановка стопы, положение корпуса и работа рук. Учим бегать легко и без травм.',
                                    icon: '🏃‍♂️'
                                },
                                {
                                    title: 'Дыхание',
                                    desc: 'Разберем, как правильно дышать на разных скоростях, чтобы не "сбиваться" через 500 метров.',
                                    icon: '🌬️'
                                },
                                {
                                    title: 'Экипировка',
                                    desc: 'Поможем выбрать первые кроссовки и одежду по погоде. Без лишних трат.',
                                    icon: '👟'
                                }
                            ].map((item, idx) => (
                                <BlurFade key={idx} delay={idx * 0.1}>
                                    <div className="p-8 bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-4xl mb-4">{item.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-text-muted">{item.desc}</p>
                                    </div>
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Content for SEO */}
            <section className="py-16 md:py-24 bg-white w-full border-t border-orange-50">
                <Container>
                    <div className="max-w-4xl mx-auto prose prose-orange prose-lg">
                        <h2 className="text-3xl font-black mb-8">Обучение бегу взрослых в Симферополе</h2>
                        <p>
                            Многие считают, что бег — это просто. Но без базовых знаний легко получить травму колена или спины. В нашей школе в <strong>Симферополе</strong> мы уделяем особое внимание безопасности.
                        </p>
                        <p>
                            <strong>Как начать бегать с нуля?</strong> Всё начинается с первой прогулки-перебежки. В КофеРан вечеринка мы используем метод чередования бега и ходьбы, что позволяет плавно войти в тренировочный процесс даже тем, кто последний раз бегал в школе.
                        </p>
                        <p>
                            Наши тренировки проходят в <strong>парке Гагарина</strong>. Это идеальное место для тех, кто ищет <strong>обучение технике бега</strong> на свежем воздухе в компании единомышленников.
                        </p>
                        <div className="mt-12 p-8 bg-orange-50 rounded-2xl flex flex-col md:flex-row items-center gap-8 justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Готовы сделать первый шаг?</h3>
                                <p className="text-text-muted">Приходите на нашу ближайшую открытую тренировку во вторник.</p>
                            </div>
                            <Button href="https://t.me/coffeerunparty_simf" external>Чат Симферополя</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
