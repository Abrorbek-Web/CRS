import axios from "./api";

interface Document {
  id: string;
  title: string;
  // Add other document fields as necessary
}

interface WorkProgress {
  status: string;
  document: string;
  start_time: string;
  end_time?: string;
  comment?: string;
  activity_type?: string;
}

interface ApiParams {
  [key: string]: string | number | boolean | undefined;
}

export const getDocuments = async (page: number): Promise<any> => {
  try {
    const response = await axios.get(`/document/?page=${page}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getUserInfo = async (): Promise<any> => {
  try {
    const response = await axios.get(`/user/1`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getWorksUserDone = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(`/work-progress-by-user/?user_id=${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getFilteredDocuments = async (params: ApiParams): Promise<any> => {
  try {
    const response = await axios.get(`/document/`, { params });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getFilteredVendorDocuments = async (
  params: ApiParams
): Promise<any> => {
  try {
    const response = await axios.get(`/vendor-document/`, { params });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getFilteredShopDocuments = async (
  params: ApiParams
): Promise<any> => {
  try {
    const response = await axios.get(`/shop-document/`, { params });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getDocumentById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`/document/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getWorkProgesses = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`/work-progress/?document_id=${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getFilteredMyWorkProgressess = async (
  params: ApiParams
): Promise<any> => {
  try {
    const response = await axios.get(`/my-work-progress/`, { params });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const createWorkProgress = async (
  status: string,
  document: string,
  date: string
): Promise<any> => {
  try {
    const response = await axios.post(`/work-progress/`, {
      status,
      document,
      start_time: date,
      activity_type: "document",
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const createActivity = async (body: WorkProgress): Promise<any> => {
  try {
    const response = await axios.post(`/work-progress/`, body);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const finishWorkProgress = async (
  status: string,
  document: string,
  date: string,
  id: string
): Promise<any> => {
  try {
    const response = await axios.put(`/work-progress/${id}/`, {
      status,
      document,
      end_time: date,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const addCommentWorkProgress = async (
  status: string,
  document: string,
  id: string,
  comment: string
): Promise<any> => {
  try {
    const response = await axios.put(`/work-progress/${id}/`, {
      status,
      document,
      comment,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const editWorkProgress = async (
  start_time: string,
  end_time: string,
  comment: string,
  document: string,
  id: string,
  status: string
): Promise<any> => {
  try {
    const response = await axios.put(`/work-progress/${id}/`, {
      start_time,
      end_time,
      document,
      comment,
      status,
      is_updated: true,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const addNewWorkProgress = async ({
  status,
  document,
  start_time,
  end_time,
  comment,
}: WorkProgress): Promise<any> => {
  const body: WorkProgress = comment
    ? { status, document, start_time, end_time, comment }
    : { status, document, start_time, end_time, activity_type: "document" };

  try {
    const response = await axios.post(`/work-progress/`, body);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getVersion = async (): Promise<any> => {
  try {
    const response = await axios.get(`/get-soft-version/`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
