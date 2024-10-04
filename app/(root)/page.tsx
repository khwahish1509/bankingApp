import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn ={ firstName: 'Khwahish', lastName: "Vaid", email: "contact@bankbussy.co"};

    return (
    <section className="home">
        <div className='home-content'>
            <header className='home-header'>
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName|| 'Guest'}
              subtext="Do Banking efficiently"
            />
            
            <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
            />
            </header>

            RECENT TRANSACTION
        </div>

        <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{}, {}]}
        />
    </section>
    )
}


export default Home