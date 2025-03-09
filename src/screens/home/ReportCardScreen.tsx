import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import GradientBackground from '../../components/GradientBackground';
import Header from '../../components/Header';
import StepProgress from '../../components/CustomStepProgress';
import {useNavigation} from '@react-navigation/native';
import LostCardComponent from '../../components/lostBankCardComponent/LostCardComponent';
import CreditCard from '../../components/CreditCard';
import BankCardComponent from '../../components/lostBankCardComponent/BankCardComponent';
import PlasticCardComponent from '../../components/lostBankCardComponent/PlasticCardComponent';
import DocumentCardComponent from '../../components/lostBankCardComponent/DocumentCardComponent';
import IncidentSummary from '../../components/lostBankCardComponent/IncidentSummary';
import IdentityCardComponent from '../../components/lostBankCardComponent/IdentityCardComponent';

export interface FormData {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  address1: string;
  address2: string;
}

const ReportCardScreen = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [lostCardformData, setLostCardFormData] = useState<FormData>({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    address1: '',
    address2: '',
  });
  const [selectedCard, setSelectedCard] = useState();
  const [plasticCardformdata, setPlasticCardformData] = useState();
  const [documnentData, setdocumnentData] = useState();
  const [summaryData, setSummaryData] = useState();
  const [identityData,setIdentityData]= useState({
    name:'Alex white',
    phoneNo:'8166778899',
    emailAddress:'email@example.com'
  })

  const handleNext = () => {
    setStep(prevStep => Math.min(prevStep + 1, 6));
    if (step === 6) {
      navigation.navigate('LostReportScreen');
    }
  };
  const handlePrevious = () => setStep(prevStep => Math.max(prevStep - 1, 1));

  const handleSelectCard = (data: any) => {
    setSelectedCard(data);
    handleNext();
  };

  return (
    <GradientBackground>
      <Header
        title="Incident Location"
        onBackPress={() => navigation.goBack()}
        containerStyle={{marginTop: 10}}
        titleStyle={{fontSize: 20}}
      />
      <View style={{paddingHorizontal: 10, flex: 1}}>
        <StepProgress totalSteps={6} steps={1} step={step} setStep={setStep} />
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          {step == 1 && (
            <LostCardComponent
              handleNext={handleNext}
              setLostLocationFormData={setLostCardFormData}
              lostLocationFormData={lostCardformData}
            />
          )}
          {step == 2 && (
            <BankCardComponent
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              handlePress={handleSelectCard}
            />
          )}
          {step == 3 && (
            <PlasticCardComponent
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              plasticCardData={plasticCardformdata}
              setPlasticCardData={setPlasticCardformData}
            />
          )}
          {step == 4 && (
            <DocumentCardComponent
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              documnentData={documnentData}
              setdocumnentData={setdocumnentData}
            />
          )}
          {step == 5 && (
            <IncidentSummary
              handleNext={handleNext}
              setSummaryData={setSummaryData}
              summaryData={summaryData}
            />
          )}
          {step == 6 && (
            <IdentityCardComponent
              handleNext={handleNext}
              lostCardformData={lostCardformData}
              identityData={identityData}
              setIdentityData={setIdentityData}
              setLostLocationFormData={setLostCardFormData}
            />
          )}
        </ScrollView>
      </View>
    </GradientBackground>
  );
};

export default ReportCardScreen;

const styles = StyleSheet.create({});
