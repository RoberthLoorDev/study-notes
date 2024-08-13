import { saveCourse } from "../api/api";
import { collection, doc, setDoc } from "firebase/firestore";
import { describe, expect, it, vi } from "vitest";
import { db } from "../../../../firebase";

vi.mock("firebase/firestore", () => ({
    getFirestore: vi.fn(() => ({})),
    collection: vi.fn(() => ({})),
    doc: vi.fn(() => ({})),
    setDoc: vi.fn(),
    getDocs: vi.fn(),
    query: vi.fn(),
    where: vi.fn(),
    updateDoc: vi.fn(),
}));

describe("API Save Courses", () => {
    it("Should save course succesfully", async () => {
        const mockSetDoc = vi.mocked(setDoc).mockResolvedValueOnce();

        const user = { uid: "123" };
        const name = "test course";
        const imageUrl = "http://example.com/image.jpg";

        await expect(saveCourse(user, name, imageUrl)).resolves.not.toThrow();

        const docRef = doc(collection(db, "courses"));

        expect(mockSetDoc).toHaveBeenCalledWith(docRef, {
            idUser: "123",
            name,
            imageUrl,
            isDeleted: false,
            createAt: expect.any(Date),
        });
    });

    it("Should throw error when missing data", async () => {
        await expect(saveCourse(null, null, null)).rejects.toThrow();
    });
});
