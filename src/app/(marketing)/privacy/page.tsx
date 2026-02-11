import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
    title: 'Политика конфиденциальности',
    description: 'Политика в отношении обработки персональных данных проекта КофеРан вечеринка.',
    path: '/privacy',
})

export default function PrivacyPage() {
    return (
        <div className="flex-1 bg-background-light py-12 px-4 md:px-10">
            <div className="max-w-[800px] mx-auto prose prose-slate">
                <h1 className="text-3xl font-black mb-8">Политика конфиденциальности</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">1. Общие положения</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые проектом «КофеРан вечеринка» (далее — Оператор).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">2. Основные понятия</h2>
                    <ul className="list-disc pl-5 text-text-muted space-y-2">
                        <li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
                        <li><strong>Оператор</strong> — Организатор проекта КофеРан вечеринка, самостоятельно или совместно с другими лицами организующий и (или) осуществляющий обработку персональных данных.</li>
                        <li><strong>Обработка персональных данных</strong> — любое действие (операция) или совокупность действий (операций) с персональными данными.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">3. Цели обработки персональных данных</h2>
                    <p className="text-text-muted leading-relaxed mb-4">Целью обработки персональных данных Пользователя является:</p>
                    <ul className="list-disc pl-5 text-text-muted space-y-2">
                        <li>Публикация спортивных достижений участников забегов.</li>
                        <li>Ведение и отображение публичного рейтинга сообщества.</li>
                        <li>Информирование Пользователя посредством отправки электронных писем.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">4. Перечень обрабатываемых данных</h2>
                    <p className="text-text-muted leading-relaxed mb-4">Оператор обрабатывает следующие персональные данные:</p>
                    <ul className="list-disc pl-5 text-text-muted space-y-2">
                        <li>Фамилия, имя, отчество (при наличии);</li>
                        <li>Пол;</li>
                        <li>Возраст или год рождения;</li>
                        <li>Спортивные результаты (дистанция, время, темп).</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">5. Отзыв согласия</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на официальный адрес проекта с пометкой «Отзыв согласия на обработку персональных данных».
                    </p>
                </section>

                <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-text-muted italic">
                    Последнее обновление: 26 января 2026 г.
                </div>
            </div>
        </div>
    )
}
