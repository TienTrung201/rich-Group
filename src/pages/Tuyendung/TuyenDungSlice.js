import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const TuyenDungSlice = createSlice({
  name: "TuyenDungSlice",
  initialState: {
    status: "idle",
    recruitmentJob: [
      {
        title: "Backend Developer (JAVA)",
        deadline: "02/11/2022 03:30",
        number: 5,
      },
      {
        title: "Software Engineer (.NET, Angular)",
        deadline: "20/01/2022 23:00",
        number: 2,
      },
      {
        title: "Backend Dev (Python/Golang/Java)~$2,500",
        deadline: "07/08/2022 15:30",
        number: 2,
      },
      {
        title: "Fullstack Java (Spring, Angular)",
        deadline: "28/01/2022 03:00",
        number: 3,
      },
      {
        title: "05 Backend Developer (Java, JEE)",
        deadline: "10/06/2022 12:00",
        number: 7,
      },
      {
        title: "Mid-Senior .Net Dev (onsite/remote)",
        deadline: "08/11/2022 15:30",
        number: 8,
      },
      {
        title: "Software Developer (Angular, C#, .Net)",
        deadline: "20/06/2022 22:30",
        number: 15,
      },
      {
        title: "Software Developer (SQL/.Net/JavaScript)",
        deadline: "12/03/2022 00:00",
        number: 2,
      },
      {
        title: "Middle Android (Kotlin)~2,000 USD",
        deadline: "20/03/2022 11:30",
        number: 1,
      },
      {
        title: "Flutter Developer (Android, iOS)",
        deadline: "23/11/2022 12:30",
        number: 3,
      },
      {
        title: "Urgent - Android Developer (Java/Kotlin)",
        deadline: "04/04/2022 08:00",
        number: 9,
      },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecruitmentJob.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRecruitmentJob.fulfilled, (state, action) => {
        state.recruitmentJob = action.payload;
        state.status = "idle";
      })
      .addCase(AddNewJob.fulfilled, (state, action) => {
        state.recruitmentJob.push(action.payload);
      });
  },
});
export const fetchRecruitmentJob = createAsyncThunk(
  "recruitment/fetchRecruitmentJob",
  async () => {
    const res = await fetch("/api/recruitmentJobs");
    const data = await res.json();
    return data.recruitmentJobs;
  }
);

export const AddNewJob = createAsyncThunk(
  "recruitment/AddNewJob",
  async (newJob) => {
    //dispatch bat dau tu day
    const res = await fetch("/api/recruitmentJobs", {
      //chay vao file indexAPI
      method: "POST",
      body: JSON.stringify(newJob),
    });
    const data = await res.json();
    return data.recruitmentJob; //sau do chay ra addCase nhớ là k có số nhiều là tê của Model
  }
);

export default TuyenDungSlice;
export const recruitmentJobs = [
  {
    title: "Backend Developer (JAVA)",
    deadline: "02/11/2022 03:30",
    number: 5,
  },
  {
    title: "Software Engineer (.NET, Angular)",
    deadline: "20/01/2022 23:00",
    number: 2,
  },
  {
    title: "Backend Dev (Python/Golang/Java)~$2,500",
    deadline: "07/08/2022 15:30",
    number: 2,
  },
  {
    title: "Fullstack Java (Spring, Angular)",
    deadline: "28/01/2022 03:00",
    number: 3,
  },
  {
    title: "05 Backend Developer (Java, JEE)",
    deadline: "10/06/2022 12:00",
    number: 7,
  },
  {
    title: "Mid-Senior .Net Dev (onsite/remote)",
    deadline: "08/11/2022 15:30",
    number: 8,
  },
  {
    title: "Software Developer (Angular, C#, .Net)",
    deadline: "20/06/2022 22:30",
    number: 15,
  },
  {
    title: "Software Developer (SQL/.Net/JavaScript)",
    deadline: "12/03/2022 00:00",
    number: 2,
  },
  {
    title: "Middle Android (Kotlin)~2,000 USD",
    deadline: "20/03/2022 11:30",
    number: 1,
  },
  {
    title: "Flutter Developer (Android, iOS)",
    deadline: "23/11/2022 12:30",
    number: 3,
  },
  {
    title: "Urgent - Android Developer (Java/Kotlin)",
    deadline: "04/04/2022 08:00",
    number: 9,
  },
];
