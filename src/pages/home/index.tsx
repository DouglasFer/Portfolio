// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  AboutSection,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";


export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>

        </Container>
      </Header> 
      <AboutSection>
          <HeaderContent>
            <Text as="h1" type="heading3" color="grey2">
              Sobre Mim{" "}
            </Text>
            <Text type="body2" color="grey1">
             Amante da tecnlogia desde criança, onde tinha e ainda tenho bastante curiosidade sobre como tudo funciona nesse mundo,
             comecei os estudos de programação em 2017 quando dei inicio na faculdade, estudei durante 1 ano inteiro, em faculdade
             particular, tive oportunidade de me mudar para o Rio Grande do Sul e estudar na Faculdade Federal, devido alguns problemas
             de transferência acabei não conseguindo ingressar, porém não parei de estudar, continuei por conta propria em estudos
             por videos aulas em algumas plataformas, em 2022 descobri a instituição Kenzie Academy onde me matriculei e comecei
             a aprender varias tecnologias, linguagens de programação, habilidades comportamentais, competências subjetivas e hoje quase
             me formando nessa instituição de ensino em: Desenvolvedor Web Full Stack 
             
            </Text>

          </HeaderContent>
      </AboutSection>

      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
