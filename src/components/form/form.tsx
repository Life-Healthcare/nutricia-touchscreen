import React from "react";
import {
  Button,
  Content,
  Exit,
  Footer,
  FormWrapper,
  Group,
  Header,
  Section,
} from "@/components/form/styles";
import { Checkbox, Error, TextInput } from "@/components/form/components/input";
import Modal from "@/components/modal/modal";
import schema from "@/components/form/model/form";
import { User } from "@/types";
import useSession from "@/hooks/use-session";
import config from "@/config";

const DEFAULT_USER = {
  nutrison: {
    "nutrison-protein-shot-leave-piece": false,
    "nutrison-protein-shot-user-guide": false,
    "nutrison-range-leave-piece": false,
    "nutrison-compendium": false,
    "article-high-protein-tube-feeding-in-the-community": false,
  },
  firstName: "",
  lastName: "",
  emailAddress: "",
  placeOfWork: "",
  agreement: false,
};

type Props = {
  onExit: () => void;
};

export default function Form({ onExit }: Props) {
  const session = useSession(config.analyticsEndpoint);
  const [errors, setErrors] = React.useState<{ [key: string]: boolean } | null>(
    {} || null
  );
  const [user, setUser] = React.useState<User>(DEFAULT_USER);
  const [showModal, setShowModal] = React.useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setErrors(null);
    setUser((user) => {
      if (e.target.type === "text") {
        return { ...user, [e.target.name]: e.target.value };
      } else if (e.target.name === "agreement") {
        return { ...user, agreement: !user.agreement };
      } else {
        return {
          ...user,
          nutrison: {
            ...user.nutrison,
            [e.target.name]: !user.nutrison[e.target.name],
          },
        };
      }
    });
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    let { value, error } = schema.validate(user, { abortEarly: false });
    const nutrison = Object.values(user.nutrison).filter((item) => item).length;
    let errors = {};
    if (error) {
      error.details.forEach((detail) => {
        errors = { ...errors, [detail.path[0]]: true };
      });
    }
    if (nutrison === 0) {
      errors = {
        ...errors,
        nutrison: true,
      };
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      session.end(user);
      handleReset();
      setShowModal(true);
    }
  }

  function handleReset() {
    setUser(DEFAULT_USER);
  }

  function handleExit() {
    handleReset();
    onExit();
  }

  React.useEffect(() => {
    session.start();
  }, [session]);

  return (
    <>
      <FormWrapper>
        <Header className="lazy-load lazy-load-0">
          <h1>
            <span>ORDER YOUR NUTRISON SUPPORT MATERIALS</span> AND MAKE SURE
            EVERYTHING IS AT YOUR FINGERTIPS
          </h1>
          <img src="./assets/images/logo.png" alt="Logo" />
        </Header>
        <Content>
          <Section>
            <Group className="lazy-load lazy-load-1">
              <h2>
                Please choose the Nutrison support materials you are interested
                in:*
              </h2>
              <Checkbox
                label="Nutrison Protein Shot Leave Piece"
                checked={user.nutrison["nutrison-protein-shot-leave-piece"]}
                name={"nutrison-protein-shot-leave-piece"}
                onChange={onChange}
              />
              <Checkbox
                label="Nutrison Protein Shot User Guide"
                checked={user.nutrison["nutrison-protein-shot-user-guide"]}
                name={"nutrison-protein-shot-user-guide"}
                onChange={onChange}
              />
              <Checkbox
                label="Nutrison Range Leave Piece"
                checked={user.nutrison["nutrison-range-leave-piece"]}
                name={"nutrison-range-leave-piece"}
                onChange={onChange}
              />
              <Checkbox
                label="Nutrison Compendium"
                checked={user.nutrison["nutrison-compendium"]}
                name={"nutrison-compendium"}
                onChange={onChange}
              />
              <Checkbox
                label="Article: High Protein Tube Feeding in the Community"
                checked={
                  user.nutrison[
                    "article-high-protein-tube-feeding-in-the-community"
                  ]
                }
                name={"article-high-protein-tube-feeding-in-the-community"}
                onChange={onChange}
              />
              <Error show={errors?.["nutrison"]}>
                *Please select at least one option
              </Error>
            </Group>
            <Group className="lazy-load lazy-load-2">
              <TextInput
                name="firstName"
                placeholder="Your first name"
                label="Please enter your first name*"
                value={user.firstName}
                onChange={onChange}
                showError={errors?.["firstName"]}
              />
              <TextInput
                name="lastName"
                placeholder="Your last name"
                label="Please enter your last name*"
                value={user.lastName}
                onChange={onChange}
                showError={errors?.["lastName"]}
              />
            </Group>
          </Section>
          <Section>
            <Group className="lazy-load lazy-load-1">
              <TextInput
                name="emailAddress"
                placeholder="Email address"
                label="Please enter your email address*"
                value={user.emailAddress}
                onChange={onChange}
                showError={errors?.["emailAddress"]}
              />
              <TextInput
                name="placeOfWork"
                placeholder="Place of work"
                label="Please enter your place of work*"
                value={user.placeOfWork}
                onChange={onChange}
                showError={errors?.["placeOfWork"]}
              />
            </Group>
            <Group className="lazy-load lazy-load-2">
              <h2>Be the first to know:</h2>
              <Checkbox
                label={`Yes, I would like Nutricia to contact me to update me on 
              upcoming educational webinars and events, the latest scientific 
              research and news about Nutricia products & services as well as 
              opportunities to provide feedback. You can withdraw your consent 
              at any time. Please see Nutricia’s Privacy Notice for Healthcare 
              Professionals available at www.nutricia.co.uk/hcp/privacy-policy 
              for more information.`}
                checked={user.agreement}
                name={"agreement"}
                onChange={onChange}
                labelSize="sm"
              />
            </Group>
            <Group className="lazy-load lazy-load-2">
              <Button onClick={handleSubmit}>
                <span>Submit</span>
              </Button>
              <Exit onClick={handleReset}>Reset Form</Exit>
              <Exit onClick={handleExit}>Exit</Exit>
            </Group>
          </Section>
        </Content>
        <Footer>
          <Section className="lazy-load lazy-load-3">
            <p>*Required fields</p>
            <p>
              This information is intended for healthcare professionals only.
            </p>
          </Section>
          <Section className="lazy-load lazy-load-3">
            <h3>Data Protection:</h3>
            <p>
              Data Protection: Nutricia Ltd. acting as data controller collects
              and manages your personal information. Please see Nutricia’s
              Privacy Notice for Healthcare Professionals available at
              www.nutricia.co.uk/hcp/privacy-policy for more information. You
              can withdraw your consent at any time. Any personal data provided
              by you to Nutricia will be held in accordance with our Privacy
              Notice, UK GDPR and the Data Protection Act 2018. Nutricia Ltd,
              Newmarket Avenue, Whitehorse Business Park, Trowbridge, Wiltshire
              BA14 0XQ, England.
            </p>
          </Section>
        </Footer>
      </FormWrapper>
      {showModal && <Modal />}
    </>
  );
}
