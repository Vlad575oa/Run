import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
    title: 'Доставка и возврат',
    description: 'Условия предоставления услуг, доставки товаров и информация о процедуре возврата и отказа от покупки.',
    path: '/delivery',
})

export default function DeliveryPage() {
    return (
        <div className="flex-1 bg-background-light py-12 px-4 md:px-10">
            <div className="max-w-[800px] mx-auto prose prose-slate">
                <Link href="/" className="inline-flex items-center gap-1 text-primary hover:underline text-sm mb-6 no-underline">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    На главную
                </Link>

                <h1 className="text-3xl font-black mb-2">Доставка и возврат</h1>
                <p className="text-text-muted text-lg mb-8">Условия предоставления услуг, доставки товаров и процедура возврата</p>

                {/* 1. Общие положения */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">1. Общие положения</h2>
                    <p className="text-text-muted leading-relaxed mb-3">
                        Настоящий документ определяет условия предоставления услуг и доставки товаров, а также порядок возврата и отказа от покупки на сайте <a href="https://run82.ru" className="text-primary hover:underline">run82.ru</a> (далее — Сайт).
                    </p>
                    <p className="text-text-muted leading-relaxed mb-3">
                        Продавец — Самозанятый Олейник Владислав Александрович, ИНН: 771402421981.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        Покупатель — физическое лицо, оформившее заказ на Сайте.
                    </p>
                </section>

                {/* 2. Условия предоставления услуг */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">2. Условия предоставления услуг</h2>
                    <p className="text-text-muted leading-relaxed mb-3">
                        2.1. Продавец предоставляет товары и услуги, представленные на Сайте, в соответствии с их описанием и характеристиками.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-3">
                        2.2. Информация о товарах и услугах, включая наименование, описание, стоимость и условия приобретения, размещается на соответствующих страницах Сайта.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-3">
                        2.3. Продавец оставляет за собой право вносить изменения в ассортимент, описание и стоимость товаров и услуг без предварительного уведомления.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        2.4. Оформление заказа на Сайте означает согласие Покупателя с настоящими условиями, а также с <Link href="/offer" className="text-primary hover:underline">Публичной офертой</Link>.
                    </p>
                </section>

                {/* 3. Порядок оформления заказа */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">3. Порядок оформления заказа</h2>
                    <p className="text-text-muted leading-relaxed mb-3">
                        3.1. Покупатель выбирает товар на Сайте и оформляет заказ, указывая необходимые данные для его обработки и доставки.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-3">
                        3.2. После оформления заказа Покупатель получает подтверждение на указанный контактный адрес (электронная почта или мессенджер).
                    </p>
                    <p className="text-text-muted leading-relaxed mb-3">
                        3.3. Заказ считается принятым к исполнению после его подтверждения Продавцом и получения оплаты.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        3.4. Все расчёты производятся в безналичном порядке в рублях Российской Федерации.
                    </p>
                </section>

                {/* 4. Условия доставки */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">4. Условия доставки</h2>
                    <p className="text-text-muted leading-relaxed mb-3">
                        4.1. Доставка товаров осуществляется по территории Российской Федерации способами, указанными на Сайте при оформлении заказа.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-3">
                        4.2. Сроки доставки зависят от выбранного способа и региона доставки. Ориентировочные сроки указываются при оформлении заказа.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-3">
                        4.3. Стоимость доставки рассчитывается при оформлении заказа и зависит от веса, габаритов товара и адреса доставки.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-3">
                        4.4. При получении товара Покупатель обязан осмотреть его на предмет внешних повреждений. В случае обнаружения повреждений упаковки или товара необходимо составить акт с курьером / представителем службы доставки и незамедлительно сообщить Продавцу.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        4.5. Риск случайной гибели или случайного повреждения товара переходит к Покупателю с момента передачи ему товара.
                    </p>
                </section>

                {/* 5. Возврат товара надлежащего качества */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">5. Возврат товара надлежащего качества</h2>
                    <p className="text-text-muted leading-relaxed mb-3">
                        5.1. Покупатель вправе отказаться от товара надлежащего качества в любое время до его передачи, а после передачи — в течение <strong>7 (семи) дней</strong> с момента получения товара (статья 26.1 Закона РФ «О защите прав потребителей»).
                    </p>
                    <p className="text-text-muted leading-relaxed mb-3">
                        5.2. Возврат товара надлежащего качества возможен при соблюдении следующих условий:
                    </p>
                    <ul className="list-disc pl-5 text-text-muted space-y-2 mb-3">
                        <li>сохранены товарный вид, потребительские свойства товара;</li>
                        <li>товар не был в употреблении;</li>
                        <li>имеются доказательства приобретения товара у данного Продавца (чек, подтверждение оплаты, переписка).</li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mb-3">
                        5.3. Если информация о порядке и сроках возврата товара надлежащего качества не была предоставлена в письменной форме в момент доставки, Покупатель вправе отказаться от товара в течение <strong>3 (трёх) месяцев</strong> с момента передачи товара.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        5.4. Возврат денежных средств осуществляется в течение <strong>10 (десяти) дней</strong> с даты предъявления Покупателем соответствующего требования. Стоимость доставки при возврате товара надлежащего качества не возмещается.
                    </p>
                </section>

                {/* 6. Возврат товара ненадлежащего качества */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">6. Возврат товара ненадлежащего качества</h2>
                    <p className="text-text-muted leading-relaxed mb-3">
                        6.1. В случае обнаружения недостатков товара, не оговорённых Продавцом, Покупатель вправе по своему выбору потребовать:
                    </p>
                    <ul className="list-disc pl-5 text-text-muted space-y-2 mb-3">
                        <li>безвозмездного устранения недостатков товара;</li>
                        <li>соразмерного уменьшения покупной цены;</li>
                        <li>замены на аналогичный товар надлежащего качества;</li>
                        <li>возврата уплаченной денежной суммы.</li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mb-3">
                        6.2. Требования о возврате товара ненадлежащего качества могут быть предъявлены в течение гарантийного срока или срока годности товара.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        6.3. Возврат денежных средств за товар ненадлежащего качества осуществляется в течение <strong>10 (десяти) дней</strong> с момента предъявления требования. Расходы на доставку товара ненадлежащего качества несёт Продавец.
                    </p>
                </section>

                {/* 7. Порядок возврата */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">7. Порядок оформления возврата</h2>
                    <p className="text-text-muted leading-relaxed mb-3">
                        7.1. Для оформления возврата Покупатель направляет заявление на электронную почту <a href="mailto:vlad575@mail.ru" className="text-primary hover:underline">vlad575@mail.ru</a> с указанием:
                    </p>
                    <ul className="list-disc pl-5 text-text-muted space-y-2 mb-3">
                        <li>номера заказа или даты покупки;</li>
                        <li>наименования товара;</li>
                        <li>причины возврата;</li>
                        <li>фотографий товара (при возврате товара ненадлежащего качества);</li>
                        <li>реквизитов для возврата денежных средств.</li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mb-3">
                        7.2. Продавец рассматривает заявление на возврат в течение <strong>5 (пяти) рабочих дней</strong> и направляет Покупателю ответ с инструкцией по возврату товара.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        7.3. Возврат денежных средств осуществляется тем же способом, которым была произведена оплата, если иное не согласовано с Покупателем.
                    </p>
                </section>

                {/* 8. Обмен товара */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">8. Обмен товара</h2>
                    <p className="text-text-muted leading-relaxed mb-3">
                        8.1. Покупатель вправе обменять товар надлежащего качества на аналогичный товар другого размера, формы, габарита, расцветки или комплектации в течение <strong>7 (семи) дней</strong> с момента получения, если товар не был в употреблении и сохранены его потребительские свойства.
                    </p>
                    <p className="text-text-muted leading-relaxed">
                        8.2. Для оформления обмена необходимо связаться с Продавцом по электронной почте <a href="mailto:vlad575@mail.ru" className="text-primary hover:underline">vlad575@mail.ru</a>.
                    </p>
                </section>

                {/* 9. Контактная информация */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">9. Контактная информация</h2>
                    <div className="bg-[#f9f7f5] rounded-xl p-6 border border-[#e5e1dc]">
                        <p className="text-text-muted leading-relaxed mb-3">
                            По всем вопросам, связанным с доставкой, возвратом и обменом товаров, обращайтесь:
                        </p>
                        <dl className="space-y-3 text-text-muted">
                            <div className="flex flex-col sm:flex-row sm:gap-2">
                                <dt className="font-semibold text-text-main shrink-0">E-mail:</dt>
                                <dd><a href="mailto:vlad575@mail.ru" className="text-primary hover:underline">vlad575@mail.ru</a></dd>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:gap-2">
                                <dt className="font-semibold text-text-main shrink-0">Telegram:</dt>
                                <dd><a href="https://t.me/Vlad557" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@Vlad557</a></dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-text-muted italic">
                    Последнее обновление: 28 февраля 2026 г.
                </div>
            </div>
        </div>
    )
}
