import SideBar from "./SideBar";
import MainContent from "./mainContent/MainContent"
function Home({search, openSideBar, setOpenSideBar}) {
    return (
        <main className='pt-30'>
            <div className="mx-auto px-3">
                <div className="grid grid-cols-12">
                    <aside className="col-span-2">
                        {openSideBar && (
                        <div 
                            className="fixed inset-0 bg-black/50 z-10 md:hidden"
                            onClick={() => setOpenSideBar(false)}
                        ></div>
                        )}
                        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
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