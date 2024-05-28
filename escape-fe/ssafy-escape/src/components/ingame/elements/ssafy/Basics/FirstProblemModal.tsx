import { useQuery } from "@tanstack/react-query"
import { styled } from "styled-components"
import CloseIcon from "@mui/icons-material/Close"
import postAnswer from "@/services/ingame/postAnswer"
import getQuiz from "@/services/ingame/getQuiz"
import Button from "@/components/common/Button"
import PlaySound from "../../horror/common/PlaySound"

const problemIndex = 0 // 0: 첫 번째 문제 1: 두 번째 문제 2: 세 번째 문제

// 첫 번째 문제 모달
const FirstProblemModal = ({
  onClose,
  timePenalty,
  setIsSolvedProblem,
  progressUpdate,
}: SSAFYProblemProps) => {
  const { data: quizData } = useQuery({
    queryKey: ["quizList", 5],
    queryFn: () => getQuiz(5),
  })

  if (!quizData) {
    return
  }

  // 선지 클릭 시 정답여부 확인
  const handleAnswerCheck = async (answer: string) => {
    if ((await postAnswer(quizData[problemIndex].quizUuid, answer)).right) {
      setIsSolvedProblem(true)
      onClose()
      if (progressUpdate) {
        progressUpdate()
      }
    } else {
      alert("오답!")
      timePenalty()
    }
  }

  return (
    <MainContainer>
      <>
        <PlaySound audioFileName="ssafy_security" play={true} />
        <img
          src={quizData[problemIndex].url}
          width={600}
          height={550}
          alt="첫번째 문제"
        />
        <CloseIconBox onClick={onClose}>
          <CloseIcon sx={{ fontSize: 40 }} />
        </CloseIconBox>
        <ChoiceBox>
          {["1", "2", "3", "4"].map((choiceIndex) => (
            <Button
              key={choiceIndex}
              theme="fail"
              width="350px"
              height="30px"
              opacity="0"
              onClick={() => handleAnswerCheck(choiceIndex)}
            />
          ))}
        </ChoiceBox>
      </>
    </MainContainer>
  )
}

export default FirstProblemModal

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  z-index: 20;
`

const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45%;
  left: 37%;
  transform: translate(-40%, 10%);
  gap: 15px;
  margin-top: 30px;
`

const CloseIconBox = styled.div`
  position: absolute;
  cursor: pointer;
  right: 30px;
  top: 25px;
  z-index: 10;
`
