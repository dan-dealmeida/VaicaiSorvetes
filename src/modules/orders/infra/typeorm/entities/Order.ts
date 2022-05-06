import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    ManyToMany,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Flavor from '@modules/flavors/infra/typeorm/entities/Flavor';

@Entity('orders')
class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'provider_id' })
    provider: User;

    @Column()
    flavors_id: string;

    @ManyToMany(() => Flavor)
    @JoinColumn({ name: 'flavors_id' })
    Flavors: Flavor[];

    @Column()
    user_id: string;

    @Column()
    price: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @CreateDateColumn()
    created_at: Date;
}

export default Order;
