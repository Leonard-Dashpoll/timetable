import { Expose } from 'class-transformer';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
import { ContactType } from './market_contact_type.entity';
import { MarketItem } from './market_item.entity';
import { MarketItemReport } from './report.entity';

@Entity({ name: 'tbl_user', synchronize: false })
export class User {
    @PrimaryColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;


}
