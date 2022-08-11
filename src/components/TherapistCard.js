import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Image from '@material-tailwind/react/Image';
import H5 from '@material-tailwind/react/Heading5';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';
import { Link } from 'react-router-dom';

export default function TherapistCard({data}) {

   
    console.log(data)
    return (
        <Card>
            <div className="flex flex-wrap justify-center">
                <div className="w-48 px-4 -mt-24">
                    <Image src={data?.image} rounded raised />
                </div>
                <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                            {data?.wholeObj?.friends?.length}
                            {data?.friends?.length}
                        </span>
                        <span className="text-sm text-gray-700">Patients</span>
                    </div>
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                        {data?.wholeObj?.specialty?.length}
                        {data?.specialty?.length}
                        </span>
                        <span className="text-sm text-gray-700">Specialties</span>
                    </div>
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                       30
                        </span>
                        <span className="text-sm text-gray-700">Successful</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <H5 color="gray">{data?.name}</H5>
                <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="place" size="xl" />
                    {data?.wholeObj?.city}
                    {data?.city}
                </div>
                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                    <Icon name="work" size="xl" />
                    {data?.title}
                </div>
                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="account_balance" size="xl" />
                    University of Computer Science
                </div>
            </div>
            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    <LeadText color="blueGray">
                    {data?.wholeObj?.about}
                    {data?.about}
                    </LeadText>
                </div>
            </CardBody>
            <CardFooter>
                <div className="w-full flex justify-center -mt-8">
                    <a
                        href="#pablo"
                        className="mt-5"
                        onClick={(e) => e.preventDefault()}
                    >
                        <Button color="purple" buttonType="link" ripple="dark">
                        <Link
                                                to={{
                                                     pathname: "/settings",
                                                     state: {
                                                         data: data,
                                                             },
                                                                }}
                                                >
                            Edit Profile
                            </Link>
                        </Button>
                    </a>
                </div>
            </CardFooter>
        </Card>
    );
}
