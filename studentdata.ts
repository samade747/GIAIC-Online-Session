interface entryTest {
    isPassed: boolean;
    obtainedMarks: number;
    totalMarks: number;
    grade: string;
    division: string;
}

interface Student {
        id: number;
        name: string;
        age: number;
        gender: string;
        rollNo: number;
        email: string;
        isOnSiteAllowed: boolean;
        entryTest: {
            isPassed: boolean;
            obtainedMarks: number;
            totalMarks: number;
            grade: string;
            division: string;
        };
    }



