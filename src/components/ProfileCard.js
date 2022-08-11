import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Image from '@material-tailwind/react/Image';
import H5 from '@material-tailwind/react/Heading5';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';
import { db } from '../base';
import { useHistory } from 'react-router-dom';

export default function ProfileCard({data}) {
    const history = useHistory()
    const update =()=>{
        db.collection('clients').doc(data?.id).update({
            verified:!data?.verified
         })
         history.push("/users")
      }
      //console.log(data.id)
     
    return (
        <Card>
            <div className="flex flex-wrap justify-center">
                <div className="w-48 px-4 -mt-24">
                    <Image src={ProfilePicture} rounded raised />
                </div>
                <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                           {data.friends.length}
                        </span>
                        {data.friends.length > 1?(<>
                            <span className="text-sm text-gray-700">Therapists</span>
                        </>):(<>
                            <span className="text-sm text-gray-700">Therapist</span>
                        </>)}
                       
                    </div>
                    
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                           {data?.bookings.length}
                        </span>
                        <span className="text-sm text-gray-700">Bookings</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <H5 color="gray">{data?.name}</H5>
                <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="place" size="xl" />
                    Los Angeles, California
                </div>
                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                    <Icon name="work" size="xl" />
                    Payment Type - {data?.preference[0]?.paymentType}
                </div>
                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="account_balance" size="xl" />
                    Seeking Therapist Who Specializes in - {data?.preference[0]?.specialty}
                </div>
            </div>
            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    <LeadText color="blueGray">
                        {data?.preference[0]?.reasons}
                    </LeadText>
                    <LeadText color="blueGray">
                        {data?.verified?(<>
                          Verified
                        </>):(<>
                         Not Verified
                        </>)}
                    </LeadText>
                </div>
            </CardBody>

            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    <LeadText color="blueGray">
                     Hello my name is {data?.name} iam a {data?.preference[0]?.clientType} looking for a  {data?.preference[0]?.gender} therapist. 
                    </LeadText>
                    <LeadText color="blueGray">
                     I want the Sessions to be conducted on  {data?.preference[0]?.medium} in {data?.preference[0]?.language}
                     </LeadText>
                     <LeadText color="blueGray">
                     I would prefer someone who is of {data?.preference[0]?.ethnicity} decent.
                     </LeadText>
                     <LeadText color="blueGray">
                     Where did you hear about us? {data?.preference[0]?.hear} 
                     </LeadText>
                </div>
            </CardBody>

            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    
                    <LeadText color="blueGray">
                        {data?.insurance[0]?.insuranceName != ""?(<>
                          Insurance Name {data?.insurance[0]?.insuranceName}
                          <br/>
                          Insurance Number {data?.insurance[0]?.insuranceNumber}
                          <img src={data?.insurance[0]?.insuranceImage} alt="" height={100}/>
                        </>):(<>
                         
                        </>)}
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
                        <Button onClick={update} color="purple" buttonType="link" ripple="dark">
                        {data?.verified?(<>
                          Unverify
                        </>):(<>
                         Verify
                        </>)}
                        </Button>
                    </a>
                </div>
            </CardFooter>
        </Card>
    );
}
