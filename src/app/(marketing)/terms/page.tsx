import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
    title: 'Пользовательское соглашение',
    description: 'Условия использования сайта и участия в мероприятиях КофеРан вечеринка.',
    path: '/terms',
})

export default function TermsPage() {
    return (
        <div className="flex-1 bg-background-light py-12 px-4 md:px-10">
            <div className="max-w-[800px] mx-auto prose prose-slate">
                <h1 className="text-3xl font-black mb-8">Пользовательское соглашение</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">1. Общие положения</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        1.1. Настоящий сайт носит исключительно информационный характер и предназначен для объединения любителей бега и популяризации здорового образа жизни.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        1.2. Использование материалов и сервисов Сайта регулируется нормами действующего законодательства Российской Федерации.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">2. Отказ от ответственности</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        2.1. Участие в любых забегах и тренировках, информация о которых размещена на Сайте, является добровольным.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4 font-bold text-text-main">
                        2.2. Оператор не несет ответственности за состояние здоровья Пользователя. Пользователь самостоятельно оценивает свои физические возможности и состояние здоровья, принимая на себя все риски, связанные с беговыми нагрузками.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">3. Порядок формирования базы данных</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        3.1. Данные в таблицу результатов могут вноситься администрацией Сайта на основе открытых протоколов соревнований и мероприятий, а также добровольно предоставленных участниками данных.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        3.2. Если Пользователь обнаружил свои данные на Сайте и желает их удалить, он может воспользоваться процедурой отзыва согласия, описанной в Политике конфиденциальности.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">4. Интеллектуальная собственность</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        4.1. Все материалы, размещенные на Сайте, защищены авторским правом.
                    </p>
                    <p className="text-text-muted leading-relaxed font-bold text-text-main">
                        4.2. Копирование и использование базы данных результатов в коммерческих целях без прямой активной ссылки на «КофеРан вечеринка» запрещено.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">5. Изменение условий</h2>
                    <p className="text-text-muted leading-relaxed">
                        5.1. Оператор оставляет за собой право изменять настоящее Соглашение в любое время без предварительного уведомления Пользователей. Новая редакция вступает в силу с момента ее публикации на Сайте.
                    </p>
                </section>

                <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-text-muted italic">
                    Последнее обновление: 26 января 2026 г.
                </div>
            </div>
        </div>
    )
}
