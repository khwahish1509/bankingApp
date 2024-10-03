import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn ={ firstname: 'Khwahish'};

    return (
    <section className="home">
        <div className='home-content'>
            <header className='home-header'>
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstname|| 'Guest'}
              subtext="Do Banking efficiently"
            />
            
            <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
            />
            </header>
        </div>
    </section>
    )
}


export default Home