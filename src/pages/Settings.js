import StatusCard from 'components/StatusCard';
import SettingsForm from 'components/SettingsForm';
import ProfileCard from 'components/ProfileCard';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
    const location = useLocation()
  const { data } = location.state
  //console.log(data)
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                       
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                            <SettingsForm data={data} />
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}
