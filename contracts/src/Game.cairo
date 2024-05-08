use starknet::ContractAddress;

#[starknet::interface]
trait IStoringCustomType<TContractState> {
    fn register_user(ref self: TContractState, key: ContractAddress, person: Person);

    fn set_person(ref self: TContractState, person: Person);
    fn get_person(self: @TContractState) -> Person;
    fn view_gamer_name(self: @TContractState, key: ContractAddress) -> Person;
    fn set_gold(ref self: TContractState, key: ContractAddress, value: felt252);
    fn get_gold(self: @TContractState, key: ContractAddress) -> felt252;
    fn set_diamond(ref self: TContractState, key: ContractAddress, value: felt252);
    fn get_diamond(self: @TContractState, key: ContractAddress) -> felt252;


    fn set_assert(ref self: TContractState, gameassert: GunAssert);
    fn get_assert(self: @TContractState) -> GunAssert;
}


#[derive(Drop, Serde, Copy, starknet::Store)]
struct Person {
    level: u128,
    playerSkin: felt252,
    gun: felt252,
    car: felt252,
    skin: felt252
}
#[derive(Drop, Serde, Copy, starknet::Store)]
struct GunAssert {
    name: felt252,
    price: u128,
}

#[starknet::contract]
mod StoringCustomType {
    use starknet::get_caller_address;
    use starknet::ContractAddress;


    use super::Person;
    use super::GunAssert;


    #[storage]
    struct Storage {
        person: Person,
        gameassert: GunAssert,
        game_data: LegacyMap::<ContractAddress, Person>,
        gold: LegacyMap::<ContractAddress, felt252>,
        diamond: LegacyMap::<ContractAddress, felt252>,
        map: LegacyMap::<ContractAddress, felt252>,
    }


    #[abi(embed_v0)]
    impl StoringCustomType of super::IStoringCustomType<ContractState> {
        fn set_person(ref self: ContractState, person: Person) {
            self.person.write(person);
        }

        fn set_assert(ref self: ContractState, gameassert: GunAssert) {
            self.gameassert.write(gameassert);
        }


        fn get_person(self: @ContractState) -> Person {
            self.person.read()
        }

        fn get_assert(self: @ContractState) -> GunAssert {
            self.gameassert.read()
        }


        fn register_user(ref self: ContractState, key: ContractAddress, person: Person) {
            self.game_data.write(key, person);
        }

        fn view_gamer_name(self: @ContractState, key: ContractAddress) -> Person {
            self.game_data.read(key)
        }

        fn set_gold(ref self: ContractState, key: ContractAddress, value: felt252) {
            self.gold.write(key, value);
        }

        fn get_gold(self: @ContractState, key: ContractAddress) -> felt252 {
            self.gold.read(key)
        }
        fn set_diamond(ref self: ContractState, key: ContractAddress, value: felt252) {
            self.diamond.write(key, value);
        }

        fn get_diamond(self: @ContractState, key: ContractAddress) -> felt252 {
            self.diamond.read(key)
        }
    }
}
