type Repository = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    owner: {
        login: string;
    };
    private: boolean;
}

export default Repository;
