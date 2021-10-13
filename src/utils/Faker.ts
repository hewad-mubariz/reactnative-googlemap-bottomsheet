import Faker from 'faker'

export const createContactListMockData = (count: number = 20) => {
    return new Array(count).fill(0).map(() => ({
      name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
      description:Faker.lorem.paragraph(),
      address: `${Faker.address.city()}, ${Faker.address.country()}`,
      jobTitle: Faker.name.jobTitle(),
      image:Faker.image.avatar()
    }));
  };