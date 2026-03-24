import SideBar from "./SideBar";
import MainContent from "./mainContent/MainContent"
function Home({search}) {
    return (
        <main className='mt-20'>
            <div className="mx-auto px-3">
                <div className="grid grid-cols-12">
                    <aside className="col-span-2">
                        <SideBar />
                    </aside>
                    <section className="md:col-span-10 col-span-12 px-2 md:px-4">
                        <MainContent search={search} />
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Home;