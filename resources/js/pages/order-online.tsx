import DuckSiteLayout from '@/components/duck-site-layout';

type OrderStep = {
    title: string;
    detail: string;
};

const orderSteps: OrderStep[] = [
    {
        title: '1. Choose products',
        detail: 'Select eggs, meat cuts, roasted duck, or duck droppings herb sacks.',
    },
    {
        title: '2. Pick delivery option',
        detail: 'Choose farm pickup or local delivery with your preferred date and time.',
    },
    {
        title: '3. Confirm quickly',
        detail: 'Submit contact details and we will confirm stock and total price promptly.',
    },
];

export default function OrderOnline() {
    return (
        <DuckSiteLayout title="Order Online">
            <section className="duck-reveal rounded-4xl border border-[#d8c3a7] bg-white/90 p-7 sm:p-10">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#925124] uppercase">
                    Order online
                </p>
                <h1 className="duck-display mt-3 text-4xl text-[#2f1a09] sm:text-5xl">
                    Place your duck product order in minutes.
                </h1>
                <p className="mt-4 max-w-3xl text-base text-[#6d492f] sm:text-lg">
                    This page is an advanced UI example for quick ordering.
                    Connect it to your backend order flow whenever you are ready
                    to make it fully functional.
                </p>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-3">
                {orderSteps.map((step, index) => {
                    return (
                        <article
                            key={step.title}
                            className="duck-reveal rounded-3xl border border-[#dcc7ad] bg-[#fff8ef] p-5"
                            style={{ animationDelay: `${120 + index * 120}ms` }}
                        >
                            <h2 className="duck-display text-2xl text-[#3b220d]">
                                {step.title}
                            </h2>
                            <p className="mt-3 text-sm text-[#6d4a31]">
                                {step.detail}
                            </p>
                        </article>
                    );
                })}
            </section>

            <section className="mt-10 rounded-4xl border border-[#d9c5ab] bg-white p-7 shadow-[0_20px_55px_rgba(77,38,10,0.12)] sm:p-8">
                <h2 className="duck-display text-3xl text-[#321b0a] sm:text-4xl">
                    Order form preview
                </h2>
                <p className="mt-2 text-sm text-[#6c492f]">
                    Example structure for customer orders. Hook these fields
                    into your form request and order model.
                </p>

                <form
                    className="mt-6 grid gap-4 md:grid-cols-2"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                        Full name
                        <input
                            type="text"
                            placeholder="Sophea Srey"
                            className="rounded-xl border border-[#d4bea3] bg-[#fffaf3] px-3 py-2.5 text-sm ring-[#cf996a] outline-none focus:ring"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                        Phone number
                        <input
                            type="tel"
                            placeholder="+855 69 866 032"
                            className="rounded-xl border border-[#d4bea3] bg-[#fffaf3] px-3 py-2.5 text-sm ring-[#cf996a] outline-none focus:ring"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                        Product type
                        <select className="rounded-xl border border-[#d4bea3] bg-[#fffaf3] px-3 py-2.5 text-sm ring-[#cf996a] outline-none focus:ring">
                            <option>Fresh Duck Eggs</option>
                            <option>Duck Meat Cuts</option>
                            <option>Roasted Duck</option>
                            <option>Duck Droppings Herb (Sack)</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                        Quantity
                        <input
                            type="text"
                            placeholder="2 trays / 5 kg / 1 duck / 1 sack"
                            className="rounded-xl border border-[#d4bea3] bg-[#fffaf3] px-3 py-2.5 text-sm ring-[#cf996a] outline-none focus:ring"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20] md:col-span-2">
                        Delivery notes
                        <textarea
                            rows={4}
                            placeholder="Preferred delivery time, landmark, or special request"
                            className="rounded-xl border border-[#d4bea3] bg-[#fffaf3] px-3 py-2.5 text-sm ring-[#cf996a] outline-none focus:ring"
                        />
                    </label>

                    <button
                        type="submit"
                        className="w-full rounded-full bg-[#3f200a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5d3113] md:col-span-2"
                    >
                        Submit Example Order
                    </button>
                </form>
            </section>
        </DuckSiteLayout>
    );
}
