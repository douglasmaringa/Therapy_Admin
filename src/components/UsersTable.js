import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import Team1 from 'assets/img/team-1-800x800.jpg';
import Team2 from 'assets/img/team-2-800x800.jpg';
import Team3 from 'assets/img/team-3-800x800.jpg';
import Team4 from 'assets/img/team-4-470x470.png';
import { Link } from 'react-router-dom';

export default function UsersTable({data}) {
    console.log(data)
    return (
        <Card>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">Available Clients</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Email
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Payment Type
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Status
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Matches
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Completion
                                </th>
                            </tr>
                        </thead>
                        <tbody>


                           {
                            data?.map((e)=>(
                                <>
                                 <tr key={e.id}>
                
                                <th className="border-b border-gray-200 hover:text-blue-700 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <Link
                                                to={{
                                                     pathname: "/user",
                                                     state: {
                                                         data: e,
                                                             },
                                                                }}
                                                >
                                    {e.email}
                                 </Link>
                                </th>
                              
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {e.preference[0]?.paymentType}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                    {
                                    e.verified?(<>Verified</>):(<>Pending</>)
                                    }
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        {
                                            e.matches?.map((f)=>(
                                                <div className="w-10 h-10 rounded-full hover:border-red-700 cursor-pointer border-2 border-white">
                                                <Link
                                                to={{
                                                     pathname: "/therapist",
                                                     state: {
                                                         data: f,
                                                             },
                                                                }}
                                                >
                                                <Image
                                                    src={f.image}
                                                    rounded
                                                    alt="..."
                                                    
                                                />
                                              </Link>
                                               
                                            </div>
                                            ))
                                        }
                                        
                                       
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {
                                        e.verified?(<>
                                        <Progress color="blue" value="100" />
                                        </>):(<>
                                            <Progress color="red" value="60" />
                                        </>)
                                    }
                                    
                                </th>
                            </tr>
                                </>
                            ))
                           }


                          
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
