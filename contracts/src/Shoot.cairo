use starknet::ContractAddress;

#[starknet::interface]
trait IStoringCustomType<TContractState> {
    fn register_user(ref self: TContractState, key: ContractAddress, person: Person);

    fn set_user_gun(ref self: TContractState, key: ContractAddress, gameassert: GunAssert);

    fn set_user_car(ref self: TContractState, key: ContractAddress, gamecarasset: CarAssert);
    fn set_user_player(
        ref self: TContractState, key: ContractAddress, gameplayerasset: PlayerAsset
    );

    fn set_person(ref self: TContractState, person: Person);
    fn get_person(self: @TContractState) -> Person;
    fn view_gamer_name(self: @TContractState, key: ContractAddress) -> Person;

    fn get_user_gun(self: @TContractState, key: ContractAddress) -> GunAssert;
    fn get_user_car(self: @TContractState, key: ContractAddress) -> CarAssert;
    fn get_user_player(self: @TContractState, key: ContractAddress) -> PlayerAsset;

    fn set_gold(ref self: TContractState, key: ContractAddress, value: felt252);
    fn get_gold(self: @TContractState, key: ContractAddress) -> felt252;
    fn set_diamond(ref self: TContractState, key: ContractAddress, value: felt252);
    fn get_diamond(self: @TContractState, key: ContractAddress) -> felt252;


    fn set_assert(ref self: TContractState, gameassert: GunAssert);
    fn get_assert(self: @TContractState) -> GunAssert;


    fn update_leaderboard(
        ref self: TContractState, key: ContractAddress, gameleaderboard: LeaderBoard
    );

    fn get_leaderboard(self: @TContractState, key: ContractAddress) -> LeaderBoard;
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
    range: felt252,
    rate: felt252,
    color: felt252,
}

#[derive(Drop, Serde, Copy, starknet::Store)]
struct CarAssert {
    name: felt252,
    price: u128,
    color: felt252,
    range: felt252,
    speed: u128,
}


#[derive(Drop, Serde, Copy, starknet::Store)]
struct PlayerAsset {
    name: felt252,
    price: u128,
    color: felt252,
    strenght: u128,
    armor: u128,
}
#[derive(Drop, Serde, Copy, starknet::Store)]
struct LeaderBoard {
    player1: felt252,
    player2: felt252,
    winner: felt252,
    points: felt252,
}

#[starknet::contract]
mod StoringCustomType {
    use starknet::get_caller_address;
    use starknet::ContractAddress;


    use super::Person;
    use super::GunAssert;
    use super::CarAssert;
    use super::PlayerAsset;
    use super::LeaderBoard;


    #[storage]
    struct Storage {
        person: Person,
        gameassert: GunAssert,
        gamecarasset: CarAssert,
        gameplayerasset: PlayerAsset,
        gameleaderboard: LeaderBoard,
        game_data: LegacyMap::<ContractAddress, Person>,
        gold: LegacyMap::<ContractAddress, felt252>,
        diamond: LegacyMap::<ContractAddress, felt252>,
        map: LegacyMap::<ContractAddress, felt252>,
        gunthing: LegacyMap::<ContractAddress, GunAssert>,
        carthing: LegacyMap::<ContractAddress, CarAssert>,
        playerthing: LegacyMap::<ContractAddress, PlayerAsset>,
        leaderthing: LegacyMap::<ContractAddress, LeaderBoard>,
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

        fn set_user_gun(ref self: ContractState, key: ContractAddress, gameassert: GunAssert) {
            self.gunthing.write(key, gameassert);
        }

        fn get_user_gun(self: @ContractState, key: ContractAddress) -> GunAssert {
            self.gunthing.read(key)
        }
        fn update_leaderboard(
            ref self: ContractState, key: ContractAddress, gameleaderboard: LeaderBoard
        ) {
            self.leaderthing.write(key, gameleaderboard);
        }

        fn get_leaderboard(self: @ContractState, key: ContractAddress) -> LeaderBoard {
            self.leaderthing.read(key)
        }
        fn set_user_car(ref self: ContractState, key: ContractAddress, gamecarasset: CarAssert) {
            self.carthing.write(key, gamecarasset);
        }

        fn get_user_car(self: @ContractState, key: ContractAddress) -> CarAssert {
            self.carthing.read(key)
        }
        fn set_user_player(
            ref self: ContractState, key: ContractAddress, gameplayerasset: PlayerAsset
        ) {
            self.playerthing.write(key, gameplayerasset);
        }

        fn get_user_player(self: @ContractState, key: ContractAddress) -> PlayerAsset {
            self.playerthing.read(key)
        }
    }
}
