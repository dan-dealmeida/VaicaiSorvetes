import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('flavors')
class Flavor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('uuid')
    provider_id: string;
    
    @Column()
    price: string;

    @Column()
    pic: string;
}

export default Flavor;
