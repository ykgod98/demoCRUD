import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryColumn()
    demo_id: number
    @Column()
    demo_name: string
    @CreateDateColumn()
    create_at: Date
    @UpdateDateColumn()
    update_at: Date
    @DeleteDateColumn()
    delete_at: Date
}
