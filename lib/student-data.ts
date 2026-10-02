export type Student = {
  id: string
  name: string
  studentId: string
  department: string
  program: "석사" | "박사" | "통합"
  grade: number
  semester: number
  advisor: string
  enrollmentDate: string
  status: "재학" | "휴학" | "수료" | "졸업"
  email: string
  phone: string
  nationality: "내국인" | "외국인"
  researchLab: string
  scholarshipType: string
  supportYears: number
}

export type CourseRecord = {
  year: string
  semester: string
  courseCode: string
  courseName: string
  credits: number
  grade: string
  score: number
  professor: string
  courseType: "전공필수" | "전공선택" | "교양"
}

export type NonCurriculumRecord = {
  id: string
  year: string
  semester: string
  programName: string
  sessionInfo: string
  startDate: string
  endDate: string
  operationMethod: "대면" | "비대면" | "혼합"
  instructor: string
  instructorAffiliation: string
  location: string
  hours: number
}

export type PaperRecord = {
  id: string
  title: string
  type: "학술논문" | "학술단행본" | "학술회의" | "전시/작품발표실적"
  journal: string
  publishDate: string
  authors: string
  isFirstAuthor: boolean
  isci: boolean
  isKci: boolean
  doi?: string
  country: "국내" | "국외"
}

export type PresentationRecord = {
  id: string
  title: string
  type: "학술논문" | "학술단행본" | "학술회의" | "전시/작품발표실적" | "수상경력" | "기타연구업적" | "연구업적집"
  conference: string
  date: string
  location: string
  country: "국내" | "국외"
  awardInfo?: string
}

export type TrainingRecord = {
  id: string
  programName: string
  duration: "장기" | "단기"
  country: string
  isAbroad: boolean
  institution: string
  startDate: string
  endDate: string
}

export type InternshipRecord = {
  id: string
  programName: string
  location: string
  isAbroad: boolean
  country: string
  institution: string
  startDate: string
  endDate: string
}

export type LectureRecord = {
  id: string
  type: "강의" | "SEMO"
  courseName: string
  courseCode: string
  credits: number
  semester: string
  dayOfWeek: string
  startTime: string
  endTime: string
  location: string
}

export type StartupRecord = {
  id: string
  registrationNumber: string
  companyName: string
  ceo: string
  establishDate: string
  address: string
  businessType: string
  businessCategory: string
  issueDate: string
  issueAuthority: string
  employees: number
  insuranceEnrolled: boolean
  annualRevenue: number
}

export type QualificationRecord = {
  id: string
  type: "자격증" | "수상" | "어학"
  name: string
  issuer: string
  certificateNumber?: string
  acquiredDate: string
  expiryDate?: string
  awardGrade?: string
  testType?: string
  testDate?: string
  totalScore?: number
  isValid: boolean
}

export type StudentCareer = {
  studentId: string
  courses: CourseRecord[]
  nonCurriculum: NonCurriculumRecord[]
  papers: PaperRecord[]
  presentations: PresentationRecord[]
  trainings: TrainingRecord[]
  internships: InternshipRecord[]
  lectures: LectureRecord[]
  startups: StartupRecord[]
  qualifications: QualificationRecord[]
}

// ──────────────────────────────────────────
// Mock Students (12명)
// ──────────────────────────────────────────
export const students: Student[] = [
  {
    id: "S001",
    name: "김민준",
    studentId: "2024020001",
    department: "경영학과",
    program: "박사",
    grade: 2,
    semester: 3,
    advisor: "이영철 교수",
    enrollmentDate: "2024-03-01",
    status: "재학",
    email: "minjun.kim@korea.ac.kr",
    phone: "010-1234-5678",
    nationality: "내국인",
    researchLab: "경영전략연구실",
    scholarshipType: "BK21 장학금",
    supportYears: 2,
  },
  {
    id: "S002",
    name: "이서연",
    studentId: "2025010012",
    department: "AI경영학과",
    program: "석사",
    grade: 1,
    semester: 2,
    advisor: "박지수 교수",
    enrollmentDate: "2025-03-01",
    status: "재학",
    email: "seoyeon.lee@korea.ac.kr",
    phone: "010-9876-5432",
    nationality: "내국인",
    researchLab: "AI혁신연구실",
    scholarshipType: "BK21 장학금",
    supportYears: 1,
  },
  {
    id: "S003",
    name: "박현우",
    studentId: "2023030007",
    department: "데이터사이언스학과",
    program: "통합",
    grade: 3,
    semester: 5,
    advisor: "최민호 교수",
    enrollmentDate: "2023-03-01",
    status: "재학",
    email: "hyunwoo.park@korea.ac.kr",
    phone: "010-5555-7777",
    nationality: "내국인",
    researchLab: "데이터분석연구실",
    scholarshipType: "BK21 장학금",
    supportYears: 3,
  },
  {
    id: "S004",
    name: "Wang Fang",
    studentId: "2024020045",
    department: "경영학과",
    program: "박사",
    grade: 2,
    semester: 3,
    advisor: "이영철 교수",
    enrollmentDate: "2024-03-01",
    status: "재학",
    email: "wangfang@korea.ac.kr",
    phone: "010-3333-2222",
    nationality: "외국인",
    researchLab: "경영전략연구실",
    scholarshipType: "BK21 장학금",
    supportYears: 2,
  },
  {
    id: "S005",
    name: "정하은",
    studentId: "2025010023",
    department: "마케팅학과",
    program: "석사",
    grade: 1,
    semester: 1,
    advisor: "한정민 교수",
    enrollmentDate: "2025-09-01",
    status: "재학",
    email: "haeun.jung@korea.ac.kr",
    phone: "010-4444-1111",
    nationality: "내국인",
    researchLab: "소비자행동연구실",
    scholarshipType: "교내 장학금",
    supportYears: 1,
  },
  {
    id: "S006",
    name: "오진석",
    studentId: "2023020018",
    department: "회계학과",
    program: "박사",
    grade: 3,
    semester: 6,
    advisor: "김재현 교수",
    enrollmentDate: "2023-03-01",
    status: "수료",
    email: "jinseok.oh@korea.ac.kr",
    phone: "010-6666-8888",
    nationality: "내국인",
    researchLab: "재무회계연구실",
    scholarshipType: "BK21 장학금",
    supportYears: 3,
  },
  {
    id: "S007",
    name: "Nguyen Thi Mai",
    studentId: "2025010034",
    department: "국제경영학과",
    program: "석사",
    grade: 1,
    semester: 2,
    advisor: "김글로벌 교수",
    enrollmentDate: "2025-03-01",
    status: "재학",
    email: "mai.nguyen@korea.ac.kr",
    phone: "010-7777-3333",
    nationality: "외국인",
    researchLab: "글로벌전략연구실",
    scholarshipType: "정부초청 장학금",
    supportYears: 2,
  },
  {
    id: "S008",
    name: "최예진",
    studentId: "2024010009",
    department: "재무학과",
    program: "석사",
    grade: 2,
    semester: 3,
    advisor: "송대현 교수",
    enrollmentDate: "2024-09-01",
    status: "재학",
    email: "yejin.choi@korea.ac.kr",
    phone: "010-8888-4444",
    nationality: "내국인",
    researchLab: "금융공학연구실",
    scholarshipType: "BK21 장학금",
    supportYears: 1,
  },
  {
    id: "S009",
    name: "한승우",
    studentId: "2024030002",
    department: "경영정보학과",
    program: "통합",
    grade: 2,
    semester: 4,
    advisor: "이정훈 교수",
    enrollmentDate: "2024-03-01",
    status: "재학",
    email: "seungwoo.han@korea.ac.kr",
    phone: "010-2222-9999",
    nationality: "내국인",
    researchLab: "디지털혁신연구실",
    scholarshipType: "BK21 장학금",
    supportYears: 2,
  },
  {
    id: "S010",
    name: "강수빈",
    studentId: "2023010015",
    department: "경영학과",
    program: "석사",
    grade: 2,
    semester: 4,
    advisor: "이영철 교수",
    enrollmentDate: "2023-09-01",
    status: "졸업",
    email: "subin.kang@korea.ac.kr",
    phone: "010-1111-6666",
    nationality: "내국인",
    researchLab: "경영전략연구실",
    scholarshipType: "교내 장학금",
    supportYears: 2,
  },
  {
    id: "S011",
    name: "유태현",
    studentId: "2025020008",
    department: "데이터사이언스학과",
    program: "박사",
    grade: 1,
    semester: 1,
    advisor: "최민호 교수",
    enrollmentDate: "2025-09-01",
    status: "재학",
    email: "taehyun.yoo@korea.ac.kr",
    phone: "010-5555-2222",
    nationality: "내국인",
    researchLab: "데이터분석연구실",
    scholarshipType: "BK21 장학금",
    supportYears: 1,
  },
  {
    id: "S012",
    name: "Tanaka Yuki",
    studentId: "2024020056",
    department: "AI경영학과",
    program: "박사",
    grade: 2,
    semester: 3,
    advisor: "박지수 교수",
    enrollmentDate: "2024-09-01",
    status: "휴학",
    email: "yuki.tanaka@korea.ac.kr",
    phone: "010-9999-1111",
    nationality: "외국인",
    researchLab: "AI혁신연구실",
    scholarshipType: "정부초청 장학금",
    supportYears: 2,
  },
]

// ──────────────────────────────────────────
// Helper: 빈 career 생성
// ──────────────────────────────────────────
function emptyCareer(studentId: string): StudentCareer {
  return {
    studentId,
    courses: [],
    nonCurriculum: [],
    papers: [],
    presentations: [],
    trainings: [],
    internships: [],
    lectures: [],
    startups: [],
    qualifications: [],
  }
}

// ──────────────────────────────────────────
// Mock Career Data
// ──────────────────────────────────────────
export const studentCareers: Record<string, StudentCareer> = {
  S001: {
    studentId: "S001",
    courses: [
      { year: "2024", semester: "1학기", courseCode: "BUS6001", courseName: "경영전략론", credits: 3, grade: "A+", score: 4.5, professor: "이영철", courseType: "전공필수" },
      { year: "2024", semester: "1학기", courseCode: "BUS6002", courseName: "조직행동론", credits: 3, grade: "A0", score: 4.0, professor: "김태호", courseType: "전공필수" },
      { year: "2024", semester: "2학기", courseCode: "BUS6010", courseName: "연구방법론", credits: 3, grade: "A+", score: 4.5, professor: "이영철", courseType: "전공필수" },
      { year: "2024", semester: "2학기", courseCode: "BUS6011", courseName: "마케팅관리론", credits: 3, grade: "B+", score: 3.5, professor: "최수진", courseType: "전공선택" },
      { year: "2025", semester: "1학기", courseCode: "BUS7001", courseName: "경영경제학", credits: 3, grade: "A0", score: 4.0, professor: "정민석", courseType: "전공선택" },
      { year: "2025", semester: "1학기", courseCode: "BUS7002", courseName: "박사논문연구I", credits: 3, grade: "P", score: 0, professor: "이영철", courseType: "전공필수" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2024", semester: "1학기", programName: "연구윤리교육", sessionInfo: "1차시", startDate: "2024-04-05", endDate: "2024-04-05", operationMethod: "비대면", instructor: "강연구", instructorAffiliation: "고려대학교", location: "온라인", hours: 3 },
      { id: "NC002", year: "2024", semester: "2학기", programName: "논문작성법 특강", sessionInfo: "3차시", startDate: "2024-09-12", endDate: "2024-09-14", operationMethod: "대면", instructor: "박학술", instructorAffiliation: "한국연구재단", location: "고려대학교 경영관 201호", hours: 9 },
      { id: "NC003", year: "2025", semester: "1학기", programName: "BK21 세미나", sessionInfo: "5차시", startDate: "2025-03-15", endDate: "2025-06-07", operationMethod: "혼합", instructor: "이영철", instructorAffiliation: "고려대학교", location: "경영대학 세미나실", hours: 15 },
    ],
    papers: [
      { id: "P001", title: "디지털 전환이 기업 성과에 미치는 영향: 동적역량 관점", type: "학술논문", journal: "경영학연구", publishDate: "2025-03-15", authors: "김민준, 이영철", isFirstAuthor: true, isci: false, isKci: true, doi: "10.17287/kmr.2025.54.2.123", country: "국내" },
      { id: "P002", title: "Strategic Agility and Firm Performance in Digital Era", type: "학술논문", journal: "Asia Pacific Journal of Management", publishDate: "2025-07-01", authors: "Kim M., Lee Y.", isFirstAuthor: true, isci: true, isKci: false, doi: "10.1007/s10490-025-09512-z", country: "국외" },
    ],
    presentations: [
      { id: "PR001", title: "디지털 전환과 경영전략 혁신", type: "학술회의", conference: "한국경영학회 동계학술대회", date: "2024-11-25", location: "서울", country: "국내" },
      { id: "PR002", title: "Digital Transformation and Organizational Capability", type: "학술회의", conference: "AOM Annual Meeting 2025", date: "2025-08-10", location: "Chicago, USA", country: "국외" },
      { id: "PR003", title: "우수논문상", type: "수상경력", conference: "한국경영학회", date: "2024-11-25", location: "서울", country: "국내", awardInfo: "우수논문상 (금상)" },
    ],
    trainings: [
      { id: "T001", programName: "해외 단기 연수 프로그램", duration: "단기", country: "미국", isAbroad: true, institution: "Harvard Business School", startDate: "2025-01-08", endDate: "2025-01-19" },
      { id: "T002", programName: "연구방법론 집중과정", duration: "단기", country: "한국", isAbroad: false, institution: "고려대학교 연구소", startDate: "2024-07-10", endDate: "2024-07-14" },
    ],
    internships: [
      { id: "I001", programName: "글로벌 경영전략 인턴십", location: "싱가포르", isAbroad: true, country: "싱가포르", institution: "McKinsey & Company", startDate: "2025-06-01", endDate: "2025-08-31" },
    ],
    lectures: [
      { id: "L001", type: "강의", courseName: "경영학개론", courseCode: "BUS1001", credits: 3, semester: "25-01", dayOfWeek: "화, 목", startTime: "09:00", endTime: "10:30", location: "경영관 101호" },
      { id: "L002", type: "SEMO", courseName: "비즈니스영어 세미나", courseCode: "SEMO2001", credits: 1, semester: "25-01", dayOfWeek: "금", startTime: "14:00", endTime: "16:00", location: "온라인" },
    ],
    startups: [
      { id: "ST001", registrationNumber: "123-45-67890", companyName: "(주)에듀테크솔루션", ceo: "김민준", establishDate: "2024-09-01", address: "서울시 성북구 안암로 145", businessType: "법인", businessCategory: "교육서비스업", issueDate: "2024-09-05", issueAuthority: "성북세무서", employees: 3, insuranceEnrolled: true, annualRevenue: 42000000 },
    ],
    qualifications: [
      { id: "Q001", type: "자격증", name: "경영지도사", issuer: "중소벤처기업부", certificateNumber: "2024-경01234", acquiredDate: "2024-05-15", isValid: true },
      { id: "Q002", type: "수상", name: "BK21 우수 대학원생상", issuer: "한국연구재단", acquiredDate: "2025-02-20", awardGrade: "우수상", isValid: true },
      { id: "Q003", type: "어학", name: "TOEIC", issuer: "ETS Korea", acquiredDate: "2024-05-14", expiryDate: "2026-05-13", testType: "TOEIC", testDate: "2024-05-14", totalScore: 935, isValid: true },
      { id: "Q004", type: "어학", name: "TEPS", issuer: "서울대학교", acquiredDate: "2024-09-10", testType: "TEPS", testDate: "2024-09-10", totalScore: 488, isValid: true },
    ],
  },

  S002: {
    studentId: "S002",
    courses: [
      { year: "2025", semester: "1학기", courseCode: "AIM5001", courseName: "AI경영론", credits: 3, grade: "A+", score: 4.5, professor: "박지수", courseType: "전공필수" },
      { year: "2025", semester: "1학기", courseCode: "AIM5002", courseName: "머신러닝 응용", credits: 3, grade: "A0", score: 4.0, professor: "정현배", courseType: "전공선택" },
      { year: "2025", semester: "2학기", courseCode: "AIM5003", courseName: "빅데이터 분석", credits: 3, grade: "A+", score: 4.5, professor: "박지수", courseType: "전공필수" },
      { year: "2025", semester: "2학기", courseCode: "AIM5010", courseName: "석사논문연구", credits: 3, grade: "P", score: 0, professor: "박지수", courseType: "전공필수" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2025", semester: "1학기", programName: "연구윤리교육", sessionInfo: "1차시", startDate: "2025-04-03", endDate: "2025-04-03", operationMethod: "비대면", instructor: "강윤리", instructorAffiliation: "고려대학교", location: "온라인", hours: 3 },
      { id: "NC002", year: "2025", semester: "2학기", programName: "AI 스타트업 특강", sessionInfo: "2차시", startDate: "2025-10-08", endDate: "2025-10-09", operationMethod: "대면", instructor: "김창업", instructorAffiliation: "카카오브레인", location: "경영대학 세미나실", hours: 6 },
    ],
    papers: [
      { id: "P001", title: "AI 기반 의사결정 지원 시스템의 경영 성과 영향 분석", type: "학술논문", journal: "경영정보학연구", publishDate: "2025-12-01", authors: "이서연, 박지수", isFirstAuthor: true, isci: false, isKci: true, country: "국내" },
    ],
    presentations: [
      { id: "PR001", title: "AI 기술과 경영혁신: 중소기업 사례 연구", type: "학술회의", conference: "경영정보학회 추계학술대회", date: "2025-11-15", location: "부산", country: "국내" },
    ],
    trainings: [
      { id: "T001", programName: "AI 연구 방법론 워크숍", duration: "단기", country: "한국", isAbroad: false, institution: "KAIST AI 연구원", startDate: "2025-07-22", endDate: "2025-07-24" },
    ],
    internships: [],
    lectures: [],
    startups: [],
    qualifications: [
      { id: "Q001", type: "자격증", name: "데이터분석 준전문가(ADsP)", issuer: "한국데이터산업진흥원", certificateNumber: "ADsP-2024-08765", acquiredDate: "2024-12-20", isValid: true },
      { id: "Q002", type: "어학", name: "TOEIC", issuer: "ETS Korea", acquiredDate: "2025-03-10", expiryDate: "2027-03-09", testType: "TOEIC", testDate: "2025-03-10", totalScore: 880, isValid: true },
    ],
  },

  S003: {
    studentId: "S003",
    courses: [
      { year: "2023", semester: "1학기", courseCode: "DS6001", courseName: "통계학특론", credits: 3, grade: "A+", score: 4.5, professor: "최민호", courseType: "전공필수" },
      { year: "2023", semester: "1학기", courseCode: "DS6002", courseName: "데이터마이닝", credits: 3, grade: "A0", score: 4.0, professor: "이준혁", courseType: "전공필수" },
      { year: "2023", semester: "2학기", courseCode: "DS6003", courseName: "딥러닝 이론 및 응용", credits: 3, grade: "A+", score: 4.5, professor: "최민호", courseType: "전공선택" },
      { year: "2024", semester: "1학기", courseCode: "DS7001", courseName: "자연어처리", credits: 3, grade: "A0", score: 4.0, professor: "한지원", courseType: "전공선택" },
      { year: "2024", semester: "2학기", courseCode: "DS7002", courseName: "컴퓨터비전", credits: 3, grade: "A+", score: 4.5, professor: "이준혁", courseType: "전공선택" },
      { year: "2025", semester: "1학기", courseCode: "DS8001", courseName: "박사논문연구II", credits: 3, grade: "P", score: 0, professor: "최민호", courseType: "전공필수" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2023", semester: "1학기", programName: "연구윤리교육", sessionInfo: "1차시", startDate: "2023-04-06", endDate: "2023-04-06", operationMethod: "비대면", instructor: "오윤리", instructorAffiliation: "고려대학교", location: "온라인", hours: 3 },
      { id: "NC002", year: "2024", semester: "1학기", programName: "데이터 사이언스 특강", sessionInfo: "4차시", startDate: "2024-04-11", endDate: "2024-04-14", operationMethod: "혼합", instructor: "김데이터", instructorAffiliation: "네이버 클라우드", location: "이과대학 201호", hours: 12 },
      { id: "NC003", year: "2025", semester: "1학기", programName: "BK21 세미나", sessionInfo: "6차시", startDate: "2025-03-20", endDate: "2025-06-12", operationMethod: "대면", instructor: "최민호", instructorAffiliation: "고려대학교", location: "데이터사이언스관 세미나실", hours: 18 },
    ],
    papers: [
      { id: "P001", title: "그래프 신경망 기반 이상 거래 탐지 시스템", type: "학술논문", journal: "정보과학회논문지", publishDate: "2024-09-01", authors: "박현우, 최민호", isFirstAuthor: true, isci: false, isKci: true, country: "국내" },
      { id: "P002", title: "Graph Neural Network for Fraud Detection in Financial Transactions", type: "학술논문", journal: "Expert Systems with Applications", publishDate: "2025-02-15", authors: "Park H., Choi M.", isFirstAuthor: true, isci: true, isKci: false, doi: "10.1016/j.eswa.2025.01.055", country: "국외" },
      { id: "P003", title: "Federated Learning for Privacy-Preserving Financial Analytics", type: "학술논문", journal: "IEEE Transactions on Neural Networks", publishDate: "2025-09-01", authors: "Park H., Lee J., Choi M.", isFirstAuthor: true, isci: true, isKci: false, country: "국외" },
    ],
    presentations: [
      { id: "PR001", title: "딥러닝 기반 금융 이상 탐지", type: "학술회의", conference: "한국정보과학회 학술대회", date: "2024-12-20", location: "서울", country: "국내" },
      { id: "PR002", title: "Graph Neural Network for Anomaly Detection", type: "학술회의", conference: "NeurIPS 2025", date: "2025-12-11", location: "New Orleans, USA", country: "국외" },
      { id: "PR003", title: "우수 포스터상", type: "수상경력", conference: "한국정보과학회", date: "2024-12-20", location: "서울", country: "국내", awardInfo: "우수 포스터상 (최우수상)" },
    ],
    trainings: [
      { id: "T001", programName: "ICML Summer School", duration: "단기", country: "미국", isAbroad: true, institution: "ICML Organizing Committee", startDate: "2025-07-23", endDate: "2025-07-28" },
      { id: "T002", programName: "해외 장기 연수 - 공동연구", duration: "장기", country: "영국", isAbroad: true, institution: "University of Cambridge", startDate: "2025-01-05", endDate: "2025-06-30" },
    ],
    internships: [
      { id: "I001", programName: "AI 연구 인턴십", location: "서울", isAbroad: false, country: "한국", institution: "네이버 AI Lab", startDate: "2024-07-01", endDate: "2024-08-31" },
      { id: "I002", programName: "Research Internship", location: "도쿄, 일본", isAbroad: true, country: "일본", institution: "RIKEN Center for AI", startDate: "2025-08-01", endDate: "2025-10-31" },
    ],
    lectures: [
      { id: "L001", type: "강의", courseName: "파이썬 프로그래밍", courseCode: "DS2001", credits: 3, semester: "25-01", dayOfWeek: "월, 수", startTime: "10:00", endTime: "11:30", location: "데이터사이언스관 301호" },
      { id: "L002", type: "강의", courseName: "데이터분석 입문", courseCode: "DS2002", credits: 3, semester: "25-02", dayOfWeek: "화, 목", startTime: "13:00", endTime: "14:30", location: "이과대학 205호" },
    ],
    startups: [],
    qualifications: [
      { id: "Q001", type: "자격증", name: "데이터분석 전문가(ADP)", issuer: "한국데이터산업진흥원", certificateNumber: "ADP-2024-01234", acquiredDate: "2024-06-30", isValid: true },
      { id: "Q002", type: "자격증", name: "정보처리기사", issuer: "한국산업인력공단", certificateNumber: "24201234567A", acquiredDate: "2024-08-19", isValid: true },
      { id: "Q003", type: "수상", name: "BK21 우수 대학원생상", issuer: "한국연구재단", acquiredDate: "2025-02-15", awardGrade: "최우수상", isValid: true },
      { id: "Q004", type: "수상", name: "삼성 AI Challenge 입상", issuer: "삼성전자", acquiredDate: "2025-10-20", awardGrade: "금상", isValid: true },
      { id: "Q005", type: "어학", name: "TOEFL", issuer: "ETS", acquiredDate: "2025-08-05", expiryDate: "2027-08-04", testType: "TOEFL", testDate: "2025-08-05", totalScore: 103, isValid: true },
    ],
  },

  S004: {
    studentId: "S004",
    courses: [
      { year: "2024", semester: "1학기", courseCode: "BUS6001", courseName: "경영전략론", credits: 3, grade: "A0", score: 4.0, professor: "이영철", courseType: "전공필수" },
      { year: "2024", semester: "1학기", courseCode: "BUS6003", courseName: "국제경영론", credits: 3, grade: "A+", score: 4.5, professor: "김글로벌", courseType: "전공필수" },
      { year: "2024", semester: "2학기", courseCode: "BUS6010", courseName: "연구방법론", credits: 3, grade: "A0", score: 4.0, professor: "이영철", courseType: "전공필수" },
      { year: "2025", semester: "1학기", courseCode: "BUS7001", courseName: "경영경제학", credits: 3, grade: "B+", score: 3.5, professor: "정민석", courseType: "전공선택" },
      { year: "2025", semester: "1학기", courseCode: "BUS7003", courseName: "박사논문연구I", credits: 3, grade: "P", score: 0, professor: "이영철", courseType: "전공필수" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2024", semester: "1학기", programName: "한국어 학술 글쓰기", sessionInfo: "8차시", startDate: "2024-03-15", endDate: "2024-05-10", operationMethod: "대면", instructor: "이한국어", instructorAffiliation: "고려대학교 언어교육원", location: "언어교육원 201호", hours: 16 },
      { id: "NC002", year: "2025", semester: "1학기", programName: "BK21 글로벌 세미나", sessionInfo: "4차시", startDate: "2025-04-05", endDate: "2025-05-24", operationMethod: "혼합", instructor: "이영철", instructorAffiliation: "고려대학교", location: "경영관 세미나실", hours: 8 },
    ],
    papers: [
      { id: "P001", title: "Cross-Cultural Management in Korean MNEs: A Case Study", type: "학술논문", journal: "International Business Review", publishDate: "2025-06-01", authors: "Wang F., Lee Y.", isFirstAuthor: true, isci: true, isKci: false, country: "국외" },
    ],
    presentations: [
      { id: "PR001", title: "Korean Corporate Culture and International Management", type: "학술회의", conference: "Asia Pacific International Business Association", date: "2025-06-20", location: "Singapore", country: "국외" },
    ],
    trainings: [
      { id: "T001", programName: "한-중 경영학 교류 프로그램", duration: "단기", country: "중국", isAbroad: true, institution: "Peking University", startDate: "2025-08-07", endDate: "2025-08-18" },
    ],
    internships: [],
    lectures: [],
    startups: [],
    qualifications: [
      { id: "Q001", type: "어학", name: "TOPIK", issuer: "국립국제교육원", certificateNumber: "TOPIK-2024-KR56789", acquiredDate: "2024-07-15", testType: "TOPIK", testDate: "2024-07-15", totalScore: 6, isValid: true },
      { id: "Q002", type: "어학", name: "TOEIC", issuer: "ETS Korea", acquiredDate: "2025-09-17", expiryDate: "2027-09-16", testType: "TOEIC", testDate: "2025-09-17", totalScore: 945, isValid: true },
    ],
  },

  S005: {
    studentId: "S005",
    courses: [
      { year: "2025", semester: "2학기", courseCode: "MKT5001", courseName: "마케팅전략론", credits: 3, grade: "A+", score: 4.5, professor: "한정민", courseType: "전공필수" },
      { year: "2025", semester: "2학기", courseCode: "MKT5002", courseName: "소비자행동론", credits: 3, grade: "A0", score: 4.0, professor: "김수현", courseType: "전공필수" },
      { year: "2026", semester: "1학기", courseCode: "MKT5003", courseName: "디지털마케팅", credits: 3, grade: "A0", score: 4.0, professor: "한정민", courseType: "전공선택" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2025", semester: "2학기", programName: "연구윤리교육", sessionInfo: "1차시", startDate: "2025-10-02", endDate: "2025-10-02", operationMethod: "비대면", instructor: "강윤리", instructorAffiliation: "고려대학교", location: "온라인", hours: 3 },
    ],
    papers: [],
    presentations: [],
    trainings: [],
    internships: [],
    lectures: [],
    startups: [],
    qualifications: [
      { id: "Q001", type: "자격증", name: "구글 애널리틱스 자격증(GAIQ)", issuer: "Google", certificateNumber: "GA-2025-45678", acquiredDate: "2025-08-10", isValid: true },
      { id: "Q002", type: "어학", name: "TOEIC", issuer: "ETS Korea", acquiredDate: "2025-06-15", expiryDate: "2027-06-14", testType: "TOEIC", testDate: "2025-06-15", totalScore: 850, isValid: true },
    ],
  },

  S006: {
    studentId: "S006",
    courses: [
      { year: "2023", semester: "1학기", courseCode: "ACC6001", courseName: "고급재무회계", credits: 3, grade: "A+", score: 4.5, professor: "김재현", courseType: "전공필수" },
      { year: "2023", semester: "1학기", courseCode: "ACC6002", courseName: "세무회계론", credits: 3, grade: "A+", score: 4.5, professor: "박세무", courseType: "전공필수" },
      { year: "2023", semester: "2학기", courseCode: "ACC6003", courseName: "회계감사론", credits: 3, grade: "A0", score: 4.0, professor: "김재현", courseType: "전공필수" },
      { year: "2024", semester: "1학기", courseCode: "ACC7001", courseName: "국제회계기준 연구", credits: 3, grade: "A+", score: 4.5, professor: "이회계", courseType: "전공선택" },
      { year: "2024", semester: "2학기", courseCode: "ACC7002", courseName: "박사논문연구I", credits: 3, grade: "P", score: 0, professor: "김재현", courseType: "전공필수" },
      { year: "2025", semester: "1학기", courseCode: "ACC7003", courseName: "박사논문연구II", credits: 3, grade: "P", score: 0, professor: "김재현", courseType: "전공필수" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2023", semester: "1학기", programName: "연구윤리교육", sessionInfo: "1차시", startDate: "2023-04-10", endDate: "2023-04-10", operationMethod: "비대면", instructor: "강윤리", instructorAffiliation: "고려대학교", location: "온라인", hours: 3 },
      { id: "NC002", year: "2024", semester: "2학기", programName: "IFRS 실무 세미나", sessionInfo: "3차시", startDate: "2024-09-20", endDate: "2024-09-22", operationMethod: "대면", instructor: "이IFRS", instructorAffiliation: "삼일회계법인", location: "경영관 세미나실", hours: 9 },
    ],
    papers: [
      { id: "P001", title: "ESG 공시와 기업가치: 한국 상장기업 실증분석", type: "학술논문", journal: "회계학연구", publishDate: "2025-03-01", authors: "오진석, 김재현", isFirstAuthor: true, isci: false, isKci: true, country: "국내" },
      { id: "P002", title: "The Impact of IFRS Adoption on Earnings Quality in Emerging Markets", type: "학술논문", journal: "Journal of International Accounting Research", publishDate: "2025-09-15", authors: "Oh J., Kim J.", isFirstAuthor: true, isci: true, isKci: false, country: "국외" },
    ],
    presentations: [
      { id: "PR001", title: "ESG 공시 의무화와 기업 투명성", type: "학술회의", conference: "한국회계학회 학술대회", date: "2025-05-20", location: "서울", country: "국내" },
    ],
    trainings: [],
    internships: [
      { id: "I001", programName: "회계법인 인턴십", location: "서울", isAbroad: false, country: "한국", institution: "삼정KPMG", startDate: "2024-07-01", endDate: "2024-08-31" },
    ],
    lectures: [
      { id: "L001", type: "강의", courseName: "회계원리", courseCode: "ACC1001", credits: 3, semester: "25-02", dayOfWeek: "월, 수", startTime: "10:00", endTime: "11:30", location: "경영관 202호" },
    ],
    startups: [],
    qualifications: [
      { id: "Q001", type: "자격증", name: "공인회계사(CPA)", issuer: "금융위원회", certificateNumber: "CPA-2025-01234", acquiredDate: "2025-01-15", isValid: true },
      { id: "Q002", type: "수상", name: "한국회계학회 우수논문상", issuer: "한국회계학회", acquiredDate: "2025-05-20", awardGrade: "대상", isValid: true },
      { id: "Q003", type: "어학", name: "TOEIC", issuer: "ETS Korea", acquiredDate: "2025-01-20", expiryDate: "2027-01-19", testType: "TOEIC", testDate: "2025-01-20", totalScore: 910, isValid: true },
    ],
  },

  S007: {
    studentId: "S007",
    courses: [
      { year: "2025", semester: "1학기", courseCode: "IB5001", courseName: "국제경영전략", credits: 3, grade: "A0", score: 4.0, professor: "김글로벌", courseType: "전공필수" },
      { year: "2025", semester: "1학기", courseCode: "IB5002", courseName: "글로벌 마케팅", credits: 3, grade: "A+", score: 4.5, professor: "한정민", courseType: "전공필수" },
      { year: "2025", semester: "2학기", courseCode: "IB5003", courseName: "다문화경영론", credits: 3, grade: "A0", score: 4.0, professor: "김글로벌", courseType: "전공선택" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2025", semester: "1학기", programName: "한국어 학술 글쓰기", sessionInfo: "6차시", startDate: "2025-03-20", endDate: "2025-05-15", operationMethod: "대면", instructor: "이한국어", instructorAffiliation: "고려대학교 언어교육원", location: "언어교육원 201호", hours: 12 },
    ],
    papers: [],
    presentations: [
      { id: "PR001", title: "ASEAN Market Entry Strategies for Korean SMEs", type: "학술회의", conference: "APIBA Annual Conference 2025", date: "2025-11-10", location: "Hanoi, Vietnam", country: "국외" },
    ],
    trainings: [],
    internships: [],
    lectures: [],
    startups: [],
    qualifications: [
      { id: "Q001", type: "어학", name: "TOPIK", issuer: "국립국제교육원", acquiredDate: "2025-04-20", testType: "TOPIK", testDate: "2025-04-20", totalScore: 5, isValid: true },
      { id: "Q002", type: "어학", name: "TOEFL", issuer: "ETS", acquiredDate: "2025-02-15", expiryDate: "2027-02-14", testType: "TOEFL", testDate: "2025-02-15", totalScore: 98, isValid: true },
    ],
  },

  S008: {
    studentId: "S008",
    courses: [
      { year: "2024", semester: "2학기", courseCode: "FIN5001", courseName: "재무관리론", credits: 3, grade: "A+", score: 4.5, professor: "송대현", courseType: "전공필수" },
      { year: "2024", semester: "2학기", courseCode: "FIN5002", courseName: "투자론", credits: 3, grade: "A0", score: 4.0, professor: "이투자", courseType: "전공필수" },
      { year: "2025", semester: "1학기", courseCode: "FIN5003", courseName: "파생상품론", credits: 3, grade: "A+", score: 4.5, professor: "송대현", courseType: "전공선택" },
      { year: "2025", semester: "1학기", courseCode: "FIN5010", courseName: "석사논문연구", credits: 3, grade: "P", score: 0, professor: "송대현", courseType: "전공필수" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2025", semester: "1학기", programName: "금융 데이터 분석 워크숍", sessionInfo: "2차시", startDate: "2025-04-15", endDate: "2025-04-16", operationMethod: "대면", instructor: "김퀀트", instructorAffiliation: "NH투자증권", location: "경영관 세미나실", hours: 6 },
    ],
    papers: [
      { id: "P001", title: "한국 주식시장에서의 모멘텀 전략 유효성 분석", type: "학술논문", journal: "재무연구", publishDate: "2025-11-01", authors: "최예진, 송대현", isFirstAuthor: true, isci: false, isKci: true, country: "국내" },
    ],
    presentations: [
      { id: "PR001", title: "머신러닝 기반 포트폴리오 최적화", type: "학술회의", conference: "한국재무학회 학술대회", date: "2025-06-20", location: "서울", country: "국내" },
    ],
    trainings: [],
    internships: [
      { id: "I001", programName: "증권사 리서치 인턴", location: "서울", isAbroad: false, country: "한국", institution: "삼성증권", startDate: "2025-07-01", endDate: "2025-08-31" },
    ],
    lectures: [],
    startups: [],
    qualifications: [
      { id: "Q001", type: "자격증", name: "투자자산운용사", issuer: "한국금융투자협회", certificateNumber: "IAM-2025-56789", acquiredDate: "2025-03-20", isValid: true },
      { id: "Q002", type: "자격증", name: "재무위험관리사(FRM)", issuer: "GARP", certificateNumber: "FRM-2025-12345", acquiredDate: "2025-05-15", isValid: true },
      { id: "Q003", type: "어학", name: "TOEIC", issuer: "ETS Korea", acquiredDate: "2025-04-12", expiryDate: "2027-04-11", testType: "TOEIC", testDate: "2025-04-12", totalScore: 905, isValid: true },
    ],
  },

  S009: {
    studentId: "S009",
    courses: [
      { year: "2024", semester: "1학기", courseCode: "MIS6001", courseName: "경영정보시스템론", credits: 3, grade: "A+", score: 4.5, professor: "이정훈", courseType: "전공필수" },
      { year: "2024", semester: "1학기", courseCode: "MIS6002", courseName: "IT전략경영", credits: 3, grade: "A0", score: 4.0, professor: "박IT", courseType: "전공필수" },
      { year: "2024", semester: "2학기", courseCode: "MIS6003", courseName: "디지털플랫폼론", credits: 3, grade: "A+", score: 4.5, professor: "이정훈", courseType: "전공선택" },
      { year: "2025", semester: "1학기", courseCode: "MIS7001", courseName: "블록체인 비즈니스", credits: 3, grade: "A0", score: 4.0, professor: "김블록", courseType: "전공선택" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2024", semester: "1학기", programName: "연구윤리교육", sessionInfo: "1차시", startDate: "2024-04-10", endDate: "2024-04-10", operationMethod: "비대면", instructor: "강윤리", instructorAffiliation: "고려대학교", location: "온라인", hours: 3 },
      { id: "NC002", year: "2025", semester: "1학기", programName: "클라우드 컴퓨팅 특강", sessionInfo: "2차시", startDate: "2025-05-08", endDate: "2025-05-09", operationMethod: "대면", instructor: "이클라우드", instructorAffiliation: "AWS Korea", location: "경영정보관 301호", hours: 6 },
    ],
    papers: [
      { id: "P001", title: "디지털 플랫폼 생태계의 네트워크 효과 분석", type: "학술논문", journal: "경영정보학연구", publishDate: "2025-06-01", authors: "한승우, 이정훈", isFirstAuthor: true, isci: false, isKci: true, country: "국내" },
    ],
    presentations: [
      { id: "PR001", title: "블록체인 기반 공급망 관리 혁신", type: "학술회의", conference: "경영정보학회 춘계학술대회", date: "2025-05-25", location: "대전", country: "국내" },
    ],
    trainings: [
      { id: "T001", programName: "실리콘밸리 IT 연수", duration: "단기", country: "미국", isAbroad: true, institution: "Stanford University", startDate: "2025-08-05", endDate: "2025-08-16" },
    ],
    internships: [],
    lectures: [],
    startups: [
      { id: "ST001", registrationNumber: "234-56-78901", companyName: "(주)디체인랩", ceo: "한승우", establishDate: "2025-03-01", address: "서울시 성북구 안암로 100", businessType: "법인", businessCategory: "소프트웨어개발업", issueDate: "2025-03-05", issueAuthority: "성북세무서", employees: 2, insuranceEnrolled: false, annualRevenue: 15000000 },
    ],
    qualifications: [
      { id: "Q001", type: "자격증", name: "정보처리기사", issuer: "한국산업인력공단", certificateNumber: "25101234567B", acquiredDate: "2025-03-10", isValid: true },
      { id: "Q002", type: "자격증", name: "AWS Solutions Architect", issuer: "Amazon Web Services", certificateNumber: "AWS-SA-2025-99999", acquiredDate: "2025-06-20", isValid: true },
      { id: "Q003", type: "어학", name: "TOEIC", issuer: "ETS Korea", acquiredDate: "2025-02-08", expiryDate: "2027-02-07", testType: "TOEIC", testDate: "2025-02-08", totalScore: 870, isValid: true },
    ],
  },

  S010: {
    ...emptyCareer("S010"),
    courses: [
      { year: "2023", semester: "2학기", courseCode: "BUS5001", courseName: "경영전략론", credits: 3, grade: "A+", score: 4.5, professor: "이영철", courseType: "전공필수" },
      { year: "2023", semester: "2학기", courseCode: "BUS5002", courseName: "조직행동론", credits: 3, grade: "A0", score: 4.0, professor: "김태호", courseType: "전공필수" },
      { year: "2024", semester: "1학기", courseCode: "BUS5003", courseName: "연구방법론", credits: 3, grade: "A+", score: 4.5, professor: "이영철", courseType: "전공필수" },
      { year: "2024", semester: "1학기", courseCode: "BUS5010", courseName: "석사논문연구", credits: 3, grade: "P", score: 0, professor: "이영철", courseType: "전공필수" },
    ],
    papers: [
      { id: "P001", title: "중소기업의 ESG 경영 도입 효과 분석", type: "학술논문", journal: "중소기업연구", publishDate: "2025-02-01", authors: "강수빈, 이영철", isFirstAuthor: true, isci: false, isKci: true, country: "국내" },
    ],
    qualifications: [
      { id: "Q001", type: "어학", name: "TOEIC", issuer: "ETS Korea", acquiredDate: "2024-03-10", expiryDate: "2026-03-09", testType: "TOEIC", testDate: "2024-03-10", totalScore: 865, isValid: true },
    ],
  },

  S011: {
    ...emptyCareer("S011"),
    courses: [
      { year: "2025", semester: "2학기", courseCode: "DS6001", courseName: "통계학특론", credits: 3, grade: "A0", score: 4.0, professor: "최민호", courseType: "전공필수" },
      { year: "2025", semester: "2학기", courseCode: "DS6002", courseName: "데이터마이닝", credits: 3, grade: "A+", score: 4.5, professor: "이준혁", courseType: "전공필수" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2025", semester: "2학기", programName: "연구윤리교육", sessionInfo: "1차시", startDate: "2025-10-05", endDate: "2025-10-05", operationMethod: "비대면", instructor: "오윤리", instructorAffiliation: "고려대학교", location: "온라인", hours: 3 },
    ],
    qualifications: [
      { id: "Q001", type: "자격증", name: "데이터분석 준전문가(ADsP)", issuer: "한국데이터산업진흥원", certificateNumber: "ADsP-2025-12345", acquiredDate: "2025-06-15", isValid: true },
      { id: "Q002", type: "어학", name: "TOEFL", issuer: "ETS", acquiredDate: "2025-07-20", expiryDate: "2027-07-19", testType: "TOEFL", testDate: "2025-07-20", totalScore: 95, isValid: true },
    ],
  },

  S012: {
    ...emptyCareer("S012"),
    courses: [
      { year: "2024", semester: "2학기", courseCode: "AIM6001", courseName: "AI경영론", credits: 3, grade: "A0", score: 4.0, professor: "박지수", courseType: "전공필수" },
      { year: "2024", semester: "2학기", courseCode: "AIM6002", courseName: "딥러닝 비즈니스", credits: 3, grade: "B+", score: 3.5, professor: "정현배", courseType: "전공선택" },
      { year: "2025", semester: "1학기", courseCode: "AIM6003", courseName: "연구방법론", credits: 3, grade: "A0", score: 4.0, professor: "박지수", courseType: "전공필수" },
    ],
    nonCurriculum: [
      { id: "NC001", year: "2024", semester: "2학기", programName: "한국어 학술 글쓰기", sessionInfo: "6차시", startDate: "2024-09-15", endDate: "2024-11-10", operationMethod: "대면", instructor: "이한국어", instructorAffiliation: "고려대학교 언어교육원", location: "언어교육원 201호", hours: 12 },
    ],
    papers: [
      { id: "P001", title: "Generative AI Applications in Japanese Manufacturing Industry", type: "학술논문", journal: "Asian Business & Management", publishDate: "2025-04-01", authors: "Tanaka Y., Park J.", isFirstAuthor: true, isci: true, isKci: false, country: "국외" },
    ],
    qualifications: [
      { id: "Q001", type: "어학", name: "TOPIK", issuer: "국립국제교육원", acquiredDate: "2024-10-20", testType: "TOPIK", testDate: "2024-10-20", totalScore: 4, isValid: true },
      { id: "Q002", type: "어학", name: "TOEIC", issuer: "ETS Korea", acquiredDate: "2025-01-18", expiryDate: "2027-01-17", testType: "TOEIC", testDate: "2025-01-18", totalScore: 920, isValid: true },
    ],
  },
}
